import React from 'react';
import '../../../components/styles/Pagestyles.css';
import Authnav from '../Authnav/Authnav';

const Authpage = (props) => {
    return (
      <div>
         <Authnav/>
         <div className="page-define">
          <div className="container">
            {props.children}
          </div>
         </div>
      </div>
    )
}

export default Authpage;