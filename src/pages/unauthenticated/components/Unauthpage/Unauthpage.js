import React from 'react';
import '../../../components/styles/Pagestyles.css';
import Unauthnav from '../Unauthnav/Unauthnav';

const Unauthpage = (props) => {
    return (
      <div>
         <Unauthnav/>
         <div className="page-define">
          <div className="container">
            {props.children}
          </div>
         </div>
      </div>
    )
}

export default Unauthpage;