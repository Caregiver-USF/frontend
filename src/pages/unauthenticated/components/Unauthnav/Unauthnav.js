import React from 'react';
import { connect } from 'react-redux';
import './styles/Unauthnav.css'
import { NavLink } from 'react-router-dom';

const Unauthnav = (props) => {
    return (
        <div>
          <div className="unauth-nav">
            <div className="container">
              <div className="row">
               <div className="col-md-8">
                <NavLink to="/" className="nav-link" ><h5>Caregiver</h5></NavLink>
               </div>
               <div className="col-md-4">
                <div className="row" >
                 <div className="col-md-6">
                  <NavLink to="/login" className="nav-link" ><h6>Login</h6></NavLink>
                 </div>
                 <div className="col-md-6">
                  <NavLink to="/signup" className="nav-link" ><h6>Sign Up</h6></NavLink>
                 </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default connect(null, null)(Unauthnav);