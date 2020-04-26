import React from 'react'
import { connect } from 'mongoose'

const IsAuth = (props) => {
    let token = localStorage.getItem('token')

    if(token){
        console.log('Token')
    } 

    return <div> {props.children} </div>
}

export default IsAuth

// let mapDispatchToProps = (dispatch) => {
//     return {
//         logIn: (user) => {
//             dispatch(logIn(user));
//         }
//     }
// }


// export default connect(null, null)(IsAuth)