import axios from 'axios';
import FETCH_USER from './types';
export function fetchUser() {

    return function (dispatch) {
        axios.get('/api/output').then(res => dispatch({ type: FETCH_USER, payload: res.data }));

    };
};
export function handleToken(token) {
    console.log(token);
    return function (dispatch) {
        axios.post("/api/state").then(res => {
            dispatch({ type: FETCH_USER, payload: res.data })
        })
    }

};

