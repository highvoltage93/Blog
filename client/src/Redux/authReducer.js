import axios from 'axios';

const SET_AUTH = 'SET_AUTH'
const LOGIN = 'LOGIN'

const initialState = {
    isAuthorized: false,
    userId: null,
    email: null,
    token: localStorage.getItem("token"),
    name: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
        case LOGIN:
            return {
                ...state,
                userId: action.id,
                email: action.email,
                name: action.name,
                token: action.token,
                isAuthorized: true
            }
        default:
            return state;
    }
}


const setAuthAC = (id, email, name, token) => ({ type: SET_AUTH, id, email, name, token })
const logInAC = (id, name, email, token) => ({ type: LOGIN, id, name, email, token })


export const setAuthThunk = (user) => {
    return dispatch => {
        axios
            .post('/auth/register', {
                name: user.name,
                email: user.email,
                password: user.password
            })
            .then(res => {
                let { id, email, name } = res.data.user;
                if (res.status === 200) {
                    dispatch(setAuthAC(id, email, name))
                    localStorage.setItem("token", res.data.token)
                }
            })
    }
}


export const logIn = (user) => {
    return dispatch => {
        axios
            .post('/auth/logIn', {
                email: user.email,
                password: user.password
            })
            .then(res => {
                let { id, name, email } = res.data.user
                let token = res.data.token
                dispatch(logInAC(id, name, email, token))
            })
    }
}