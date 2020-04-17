import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import {compose} from "redux";
import OpenPost from './OpenBlogPost';
import { blogItem } from '../../Redux/reducer';


const OpenfullPost = (props) => {
    useEffect(() => {
        props.setPost(props.match.params.id)
    }, [props.item])


    return (
       <OpenPost post={props.post}/>
    )
}


let mapStateToProps = (state) => {
    return {
        items: state.blogs.blogs,
        post: state.blogs.post
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPost: (post) => {
            dispatch(blogItem(post));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withRouter)(OpenfullPost)

