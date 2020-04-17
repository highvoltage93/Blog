import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AuthHOC = ({ Component, isAuth }) => {
    return <>
        {
            !isAuth
                ? <Redirect to='/login' />
                : <Component />
        }
    </>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized
});

export default connect(mapStateToProps, null)(AuthHOC)