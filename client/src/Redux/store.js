import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { blogreducer } from './reducer'

import thunk from 'redux-thunk';
import { authReducer } from './authReducer';
import { authorsReducer } from './authors';

const reducer = combineReducers({
    blogs: blogreducer,
    auth: authReducer,
    authors: authorsReducer
})


const store = createStore(reducer, applyMiddleware(thunk))

export default store