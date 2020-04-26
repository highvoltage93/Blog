import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { logIn } from '../../../Redux/authReducer'

const LoginContainer = (props) => {
    return(
        <Login {...props}/>
    )
}


let mapStateToProps = (state) => {
    return {
        loginSucces: state.auth.loginSucces
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => {
            dispatch(logIn(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
