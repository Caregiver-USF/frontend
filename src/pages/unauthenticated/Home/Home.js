import React from 'react';
import { connect } from 'react-redux';
import './styles/Home.css';
import Unauthnav from '../components/Unauthnav/Unauthnav';

const Home = (props) => {
    return (
        <div>
         <Unauthnav/>
         <div className="container">
          <div className="home">
           <h1>Caregiver</h1>
          </div>
         </div>
        </div>
    )
}

export default connect(null, null)(Home);