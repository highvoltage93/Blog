import React from 'react'
import './blogspage.css'
import { NavLink } from 'react-router-dom'
import Preloader from '../Other/Preloader/Preloader'

export const BlogsPage = React.memo((props) => {
    let items = props.items.length === 0 ? <Preloader/> : props.items.map(el => {
        return (
            <NavLink to={'/post/' + el._id} className="blog-item" key={el._id}>
                <img src={el.img} alt="" />
                <div>
                    <span>{el.title}</span>
                    <p>{el.description.slice(0,50)}</p>
                    <div>{el.genre}</div>
                    <small>{el.date}</small>
                    {
                        !el.author
                            ? null
                            :<p className="author">{el.author.authorName}</p>
                    }
                    
                </div>  
            </NavLink>
        )
    })

    return (
        <div className="blogs-wrapper">
            {
                 items

            }
        </div>
    )
})