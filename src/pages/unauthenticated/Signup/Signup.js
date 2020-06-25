import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  { Input } from '../../components/Inputs/Inputs';
import "../../components/styles/Pagestyles.css";
import Unauthpage from '../components/Unauthpage/Unauthpage';
import { createNewUser } from '../../../redux/user-redux/operations/createUser';
import { store } from '../../../redux/store';

const Signup = (props) => {

    useEffect(() => {
        console.log(store.getState());
    }, [])

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender , setGender] = useState('');

    const signUp = () => {

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            gender: gender,
            returnSecureToken: true
        }
        createNewUser(data)
        .then((res) => {
            if (res === true) {
                console.log("Success")
            }
        }).catch(err => {
            console.error(err);
        })
    }

    return (
        <Unauthpage>
         <h1>Sign Up</h1>
         <div className="sign-up-form">
          <Input
           type="text"
           placeholder="First Name"
           onChangeFunc={(e) => {
               setFirstName(e.target.value)
           }}
          />
          <Input
           type="text"
           placeholder="Last Name"
           onChangeFunc={(e) => {
               setLastName(e.target.value);
           }}
          />
          <Input
           type="text"
           placeholder="Email"
           onChangeFunc={(e) => {
               setEmail(e.target.value)
           }}
          />
          <Input
           type="text"
           placeholder="Gender"
           onChangeFunc={(e) => {
                setGender(e.target.value)
           }}
          />
          <Input
           type="password"
           placeholder="Password"
           onChangeFunc={(e) => {
               setPassword(e.target.value);
           }}
          />
          <Input
           type="text"
           placeholder="Confirm Password"
          />
          <button onClick={signUp}>Sign Up</button>
         </div>
        </Unauthpage>
    )
}

export default connect(null, null)(Signup);