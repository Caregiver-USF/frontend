import { set_user_data , set_user_id_token} from './userTypes';

export const setCaregiverUserData = (data) => {
    return {
        type: set_user_data,
        payload: data
    }
}

export const setUserIdToken = (data) => {
    return {
        type: set_user_id_token,
        payload: data
    }
}
