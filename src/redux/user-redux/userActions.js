import { set_user_data , set_user_id_token, clear_user, set_authenticated} from './userTypes';

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

export const clearUser = () => {
    return {
        type: clear_user
    }
}

export const setAuthenticated = (data) => {
    return {
        type: set_authenticated,
        payload: data
    }
}
