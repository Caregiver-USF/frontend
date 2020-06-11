import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UnauthenticatedRoutes from './unauthenticated/Unauthenticateroutes';


const RootComponent = () => {
    return (
        <BrowserRouter>
         <UnauthenticatedRoutes/>
        </BrowserRouter>
    )
}

export default RootComponent;