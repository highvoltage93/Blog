import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { BlogsPage } from './BlogsPage'
import { withRouter } from "react-router";
import {compose} from "redux";
import {allBlogs} from '../../Redux/reducer'

const BlogsPageContainer = (props) => {
    useEffect(() => {
        props.allBlogs()
    }, [])
    return <BlogsPage {...props} items={props.items}/>
}

let mapStateToProps = (state) => {
    return {
        items: state.blogs.blogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        allBlogs: () => {
            dispatch(allBlogs());
        },
    }
}

const superBlogsPageContainer = compose(connect(mapStateToProps, mapDispatchToProps),withRouter)(BlogsPageContainer)

export default superBlogsPageContainer

