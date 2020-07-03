import React from 'react';
import PrivateRoute from '../security/Privateroute/Privateroute';
import Dashboard from '../../pages/authenticated/Dashboard/Dashboard';

const Authenticatedroutes = () => {
    return (
        <div>
         <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
    )
}

export default Authenticatedroutes;