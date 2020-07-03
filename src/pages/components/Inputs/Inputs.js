import React from 'react';
import './styles/Inputs.css';

export const Input = ({type = "type", onChangeFunc, placeholder}) => {
    return (
        <div>
          <div className="input-container">
           <input type={type} onChange={onChangeFunc} placeholder={placeholder} className="input-bar" />
          </div>
        </div>
    )
}
