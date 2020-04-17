import React from 'react';
import Registration from './Registration';
import { connect } from 'react-redux';
import { setAuthThunk } from '../../../Redux/authReducer';
 
const RegistrationContainer = (props) => {
    return (
        <div>
            <Registration {...props}/>
        </div>
    );
}
 

let mapStateToProps = (state) => {
    return {
        userName: state.auth.name
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (user) => {
            dispatch(setAuthThunk(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)

