import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { logIn } from '../../../Redux/authReducer'

const LoginContainer = (props) => {
    return(
        <Login {...props}/>
    )
}


// let mapStateToProps = (state) => {
//     return {
//         items: state.blogs.blogs,
//         post: state.blogs.post
//     }
// }

let mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => {
            dispatch(logIn(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
