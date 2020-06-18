import React, { useState } from 'react';
import { connect } from 'react-redux';
import  { Input } from '../../components/Inputs/Inputs';
import "../../components/styles/Pagestyles.css";
import Unauthpage from '../components/Unauthpage/Unauthpage';
import { createNewUser } from '../../../redux/user-redux/operations/createUser';

const Signup = (props) => {

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        createNewUser(data)
        .then((res) => {
            console.log(res)
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
          />
          <Input
           type="text"
           placeholder="Last Name"
          />
          <Input
           type="text"
           placeholder="Email"
           onChangeFunc={(e) => {
               setEmail(e.target.value)
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