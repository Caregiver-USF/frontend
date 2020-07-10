import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UnauthenticatedRoutes from './unauthenticated/Unauthenticateroutes';
import Authenticatedroutes from './authenticated/Authenticatedroutes';

const RootComponent = () => {
    return (
        <BrowserRouter>
         <UnauthenticatedRoutes/>
         <Authenticatedroutes/>
        </BrowserRouter>
    )
}

export default RootComponent;