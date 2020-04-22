import React from 'react'
import 'materialize-css';
import './header.css'
import { NavLink } from 'react-router-dom';

export const Header = (props) => {


    return (
        <nav>
            <div className="nav-wrapper teal lighten-2">
                <span href="#" className="brand-logo">Blog</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink exact  to="/">Main Page</NavLink></li>
                    <li><NavLink exact  to="/blogs">Blogs</NavLink></li>
                    <li><NavLink exact  to="/authors">Authors</NavLink></li>
                    <li><NavLink exact  to="/add">Create Post</NavLink></li>

                    {
                        !props.userName
                         ? <span> <li><NavLink exact  to="/registration">Registration</NavLink></li>
                            <li><NavLink exact  to="/login">Log in</NavLink></li>
                            </span>
                         : <li className="prof">{props.userName} <img className="small_avatar" src={props.avatar} alt=""/></li>
                    }
                </ul>
            </div>
        </nav>
    )
}