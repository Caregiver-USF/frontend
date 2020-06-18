import axios from 'axios';


export const testURL = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})