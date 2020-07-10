import React from 'react';
import PrivateRoute from '../security/Privateroute/Privateroute';
import Dashboard from '../../pages/authenticated/Dashboard/Dashboard';
import Modules from '../../pages/authenticated/Modules/Modules'

const Authenticatedroutes = () => {
    return (
        <div>
         <PrivateRoute path="/dashboard" component={Dashboard} />
         <PrivateRoute path="/modules" component={Modules} />
        </div>
    )
}

export default Authenticatedroutes;