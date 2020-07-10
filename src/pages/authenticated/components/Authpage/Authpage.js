import React from 'react';
import '../../../components/styles/Pagestyles.css';
//Import Authnav Component then insert into code (Line 8)

const Authpage = (props) => {
    return (
      <div>
         
         <div className="page-define">
          <div className="container">
            {props.children}
          </div>
         </div>
      </div>
    )
}

export default Authpage;