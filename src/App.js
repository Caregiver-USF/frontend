import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store, persistor_store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootComponent from './navigation/Rootcomponent';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor_store} >
        <RootComponent/>
      </PersistGate>
    </Provider>
  );
}

export default App;
