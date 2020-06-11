import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/unauthenticated/Home/Home';


const UnauthenticatedRoutes = () => {
    return (
        <div>
         <Route path="/" component={Home} exact />
        </div>
    )
}

export default UnauthenticatedRoutes;