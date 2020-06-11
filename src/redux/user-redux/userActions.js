import { set_user_data } from './userTypes';

export const setUserData = (data) => {
    return {
        type: set_user_data,
        payload: data
    }
}
