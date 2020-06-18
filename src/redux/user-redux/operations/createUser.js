import { testURL } from '../../../network/axios';

export const createNewUser = (data = {
    email: "",
    password: "",
    returnSecureToken: true
}) => {
    return new Promise((resolve , reject) => {
        const url = `accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API}`
        testURL.post(url, data, {
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}