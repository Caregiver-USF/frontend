import { set_user_data, set_user_id_token, clear_user, set_authenticated } from './userTypes';

import produce from 'immer';


const initial_user_data = {
    user: {
        firstname: "",
        lastname: "",
        email: "",
        gender: ""
    },
    idToken: "",
    authenticated: false
}

export const userReducers = produce((draft , action) => {
    switch(action.type) {
        case set_user_data:
            draft.user.firstname = action.payload.firstname;
            draft.user.lastname = action.payload.lastname;
            draft.user.email = action.payload.email;
            draft.user.gender = action.payload.gender;
            return draft
        case set_user_id_token:
            draft.idToken = action.payload;
            return draft
        case clear_user:
            draft = {
                user: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    gender: ""
                },
                idToken: "",
                authenticated: false
            }
            return draft;
        case set_authenticated:
            draft.authenticated = action.payload;
            return draft;
        default:
            return draft
    }
}, initial_user_data)