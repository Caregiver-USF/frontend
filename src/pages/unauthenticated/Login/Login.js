import React from 'react';
import { connect } from 'react-redux';
import Unauthpage from '../components/Unauthpage/Unauthpage';

const Login = (props) => {
    return (
        <Unauthpage>
          <h1>Login</h1>
        </Unauthpage>
    )
}

export default connect(null, null)(Login);