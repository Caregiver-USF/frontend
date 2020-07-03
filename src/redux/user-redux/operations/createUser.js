import { testURL , testAPI } from '../../../network/axios';
import { store } from '../../store';
import { setCaregiverUserData , setUserIdToken , setAuthenticated } from '../userActions';

export const createNewUser = (data = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    returnSecureToken: true
}) => {
    return new Promise((resolve , reject) => {
        const firebaseData = {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }

        const dbData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            email: data.email,
        }

        const url = `accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API}`

        testURL.post(url, firebaseData, {
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then((res) => {

            const { idToken } = res.data;
            store.dispatch(setUserIdToken(idToken));
            store.dispatch(setAuthenticated(true));
            createUserInDB(dbData)
            .then((response) => {

                resolve(response)

            }).catch(error => {
                console.error(error);
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

const createUserInDB = (data = {
    firstName: "",
    lastName: "",
    email: "",
    gender: ""
}) => {
    return new Promise((resolve , reject) => {
        testAPI.post("users/create-user" , data)
        .then((res) => {

            store.dispatch(setCaregiverUserData(res.data));
            resolve(true);

        }).catch(error => {
            console.log(error);
            reject(error);
        })
    })
}