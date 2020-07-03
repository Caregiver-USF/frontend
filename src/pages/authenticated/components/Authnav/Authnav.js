import React from 'react';
import { connect } from 'react-redux';
import './styles/Authnav.css';
import { NavLink } from 'react-router-dom';

const Authnav = (props) => {
    return(
        <div>
            <div className="auth-nav">
                <div classname="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>Caregiver</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <NavLink to="/dashboard" className="nav-link">
                                        <h6>Dashboard</h6>
                                    </NavLink>
                                </div>
                                <div className="col-md-4">
                                    <NavLink to="/modules" className="nav-link">
                                        <h6>Modules</h6>
                                    </NavLink>
                                </div>
                                <div className="col-md-4">
                                    <h5>logout</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(Authnav);