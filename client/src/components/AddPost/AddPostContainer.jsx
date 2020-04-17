import React from 'react'
import AddPost from './AddPost'
import { connect } from 'react-redux'
import { addPost } from '../../Redux/reducer'
import { withRouter } from 'react-router-dom'

const AddPostContainer = (props) => {
    return (
        <AddPost addPost={props.addPost} {...props} />
    )
}


let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized,
        id: state.auth.userId,
        authorName: state.auth.name
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title, img, desc, genre, id, authorName) => {
            dispatch(addPost(title, img, desc, genre, id, authorName));
        }
    }
}

let apcwr = withRouter(AddPostContainer)

export default connect(mapStateToProps, mapDispatchToProps)(apcwr)
