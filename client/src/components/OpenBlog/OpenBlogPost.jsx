import React from 'react'
import './OpenBlogPost.css'
import Preloader from '../Other/Preloader/Preloader'
import { NavLink } from 'react-router-dom'

const OpenPost = (props) => {
    let post = props.post === 0 ? <Preloader/> : props.post.map(el => {
        return <div key={el._id} className="openPost">
            <img src={el.img} alt="" />
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <NavLink to="/blogs" className="back">Back</NavLink>
        </div>

    })
    return (
        <>
            {
                post
            }
        </>
    )
}

export default OpenPost