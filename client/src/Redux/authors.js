import axios from 'axios';
const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS'

let initialState = {
    authors: []
}

export const authorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_AUTHORS:
            return {
                ...state,
                authors: action.authors
            }
        default:
            return state;
    }
}


const getAuthorsAC = (authors) => ({ type: GET_ALL_AUTHORS, authors })

export let getAuthors = () => {
    return dispatch => {
        axios
            .get('/authors/')
            .then(res => {
                dispatch(getAuthorsAC(res.data))
            })
    }
}