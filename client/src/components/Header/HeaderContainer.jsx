import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
 
const HeaderContainer = (props) => {
    return (
        <div>
            <Header {...props}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        userName: state.auth.name
    }
}
 

export default connect(mapStateToProps, null)(HeaderContainer)
