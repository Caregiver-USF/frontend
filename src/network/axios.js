import axios from 'axios';


export const testURL = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_URL
})

export const testAPI = axios.create({
    baseURL: process.env.REACT_APP_TEST_API
})