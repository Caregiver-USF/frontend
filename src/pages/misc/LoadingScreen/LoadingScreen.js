import React from 'react';
import './styles/loadingScreen.css';

const LoadingScreen = ({loading}) => {
    if (loading === true) {
        return (
            <div>
             <div className="modal-component-white">
              <h1>Loading</h1>
             </div>
            </div>
        )
    } else {
        return null;
    }
}

export default LoadingScreen