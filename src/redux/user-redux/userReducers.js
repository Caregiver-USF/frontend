import { set_user_data } from './userTypes';

import produce from 'immer';


const initial_user_data = {
    firstname: "",
    lastname: "",
    email: ""
}

export const userReducers = produce((draft , action) => {
    switch(action.type) {
        case set_user_data:
            draft.firstname = action.payload.firstname;
            draft.lastname = action.payload.lastname;
            draft.email = action.payload.email;
            return draft
        default:
            return draft
    }
}, initial_user_data)