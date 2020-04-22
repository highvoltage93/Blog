import axios from 'axios';

const SET_AUTH = 'SET_AUTH'
const LOGIN = 'LOGIN'

const initialState = {
    isAuthorized: false,
    userId: null,
    email: null,
    avatar: null,
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
                avatar: action.avatar,
                token: action.token,
                isAuthorized: true
            }
        default:
            return state;
    }
}


const setAuthAC = (id, email, name, token, avatar) => ({ type: SET_AUTH, id, email, name, token, avatar })
const logInAC = (id, name, email, avatar, token) => ({ type: LOGIN, id, name, email, avatar, token })


export const setAuthThunk = (user) => {
    return dispatch => {
        let formdata = new FormData()
        formdata.append("avatar", user.avatar)
        formdata.append("name", user.name)
        formdata.append("email", user.email)
        formdata.append("password", user.password)
        axios
            .post('/auth/register', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                let { id, email, name, avatar } = res.data.user;
                if (res.status === 200) {
                    dispatch(setAuthAC(id, email, name, avatar))
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
                let { id, name, email, avatar } = res.data.user
                let token = res.data.token
                dispatch(logInAC(id, name, email, avatar, token))
            })
    }
}