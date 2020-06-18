import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/unauthenticated/Home/Home';
import Login from '../../pages/unauthenticated/Login/Login';
import Signup from '../../pages/unauthenticated/Signup/Signup';


const UnauthenticatedRoutes = () => {
    return (
        <div>
         <Route path="/" component={Home} exact />
         <Route path="/login" component={Login} exact />
         <Route path="/signup" component={Signup} exact />
        </div>
    )
}

export default UnauthenticatedRoutes;