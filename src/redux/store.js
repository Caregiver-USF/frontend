import { createStore , applyMiddleware } from 'redux';
import { allReducers } from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore , persistReducer  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    debug: process.env.NODE_ENV === 'development'
}


const persistedReducer = persistReducer(persistConfig, allReducers);

const middleware = process.env.NODE_ENV !== 'production' ?
[require('redux-immutable-state-invariant').default(), thunk, logger] :
[thunk , logger];


export const store = createStore(persistedReducer , applyMiddleware(...middleware));
export const persistor_store = persistStore(store);