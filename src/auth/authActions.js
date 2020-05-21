import {
    toastr
} from 'react-redux-toastr'
import axios from 'axios'


const BASE_URL = 'http://localhost:3003'

export function login(values) {
    return submit(values, `${BASE_URL}/login`)
}
export function signup(values) {
    return submit(values, `${BASE_URL}/createUser`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([{
                    type: 'USER_FETCHED',
                    payload: resp.data
                }])
            })
            .catch(e => {

                toastr.error('Erro', e.message)
            })
    }
}
export function logout() {
    return {
        type: 'TOKEN_VALIDATED',
        payload: false
    }
}
export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${BASE_URL}/validateToken`, {
                    token
                })
                .then(resp => {
                    dispatch({
                        type: 'TOKEN_VALIDATED',
                        payload: resp.data.valid
                    })
                })
                .catch(e => dispatch({
                    type: 'TOKEN_VALIDATED',
                    payload: false
                }))
        } else {
            dispatch({
                type: 'TOKEN_VALIDATED',
                payload: false
            })
        }
    }
}