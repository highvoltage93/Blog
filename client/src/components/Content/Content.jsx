import React from 'react'
import {MainPage} from '../Mainpage/MainPage'
import {Route} from 'react-router-dom'
import BlogsPageContainer from '../BlogsPage/BlogsPageContainer'
import OpenfullPost from '../OpenBlog/OpenBlogContainer'
import AddPostContainer from '../AddPost/AddPostContainer'
import RegistrationContainer from '../Auth/Registration/RegistrationContainer'
import AuthorsContainer from '../Authors/AuthorsContainer'
import LoginContainer from '../Auth/Login/LoginContainer'

export const Content = (props) => {
    return(
        <>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/blogs' component={BlogsPageContainer}/>
            <Route exact path='/add' component={AddPostContainer}/>
            <Route exact path='/post/:id?' component={OpenfullPost}/>
            <Route exact path='/authors' component={AuthorsContainer}/>
            <Route exact path='/registration' component={RegistrationContainer}/>
            <Route exact path='/login' component={LoginContainer}/>
        </>
    )
}