import axios from 'axios';

const SET_POST = "SET_POST"
const SET_BLOGS = "SET_BLOGS"
const ADD_POST = "ADD_POST"

const initailState = {
    blogs: [],
    post: []
}

export const blogreducer = (state = initailState, action) => {
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                post: [action.post]
            }
        case SET_BLOGS:
            return {
                ...state,
                blogs: action.blogs
            }
        case ADD_POST:
            return {
                ...state,
                blogs: [
                    ...state.blogs,
                    {
                        title: action.title,
                        description: action.desc,
                        img: action.img,
                        date: '12.12.1003',
                        'genre': action.genre,
                    }

                ]
            }
        default:
            return state
    }
}

export const setBlogsAC = (blogs) => ({ type: SET_BLOGS, blogs: blogs })
export const setPostAC = (post) => ({ type: SET_POST, post })
export const addPostAC = (title, img, desc, genre) => ({ type: ADD_POST, title, img, desc, genre })



export const allBlogs = () => {
    return dispatch => {
        axios
            .get('/blog')
            .then(res => {
                dispatch(setBlogsAC(res.data))
            })
    }
}

export const addPost = (title, img, desc, genre, id, authorName) => {
    return dispatch => {
        axios
            .post('/blog', {
                title: title,
                img: img,
                description: desc,
                id: id,
                authorName: authorName
            })
            .then(res => {
                console.log(res)
            })
    }
}
export const blogItem = (id) => {
    return dispatch => {
        axios
            .get(`/post/${id}`)
            .then(res => {
                dispatch(setPostAC(res.data))
            })
    }
}