import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../../pages/unauthenticated/Home/Home';
import Login from '../../pages/unauthenticated/Login/Login';
import Signup from '../../pages/unauthenticated/Signup/Signup';
import { connect } from 'react-redux';



const UnauthenticatedRoutes = (props) => {
    const [authenticatedState , setAuthenticatedState] = useState(false);
    useEffect(() => {
        const { authenticated } = props;
        if (authenticated === true) {
            setAuthenticatedState(true);
        }
    }, [props])

    const CompileUnAuthenticatedRoutes = () => {
        if (authenticatedState === false) {
            return (
                <div>
                 <Route path="/" component={Home} exact />
                 <Route path="/login" component={Login} exact />
                 <Route path="/signup" component={Signup} exact />
                </div>
            )
        }  else {
            return <Redirect to="/dashboard" />;
        }
    }

    return (
        <div>
         <CompileUnAuthenticatedRoutes />
        </div>
    )
}

const mapStateToProps =({
    user: {
        authenticated
    }
}) => {
    return {
        authenticated
    }
}

export default connect(mapStateToProps , null)(UnauthenticatedRoutes);