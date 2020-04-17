import React from 'react'
import { NavLink } from 'react-router-dom'

const AddPost = ({ addPost, ...props }) => {

    let handleChange = (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let img = e.target.img.value
        let desc = e.target.desc.value
        let genre = e.target.genre.value
        let id = props.id
        let authorName = props.authorName
        addPost(title, img, desc, genre, id, authorName)
        props.history.push("/blogs");
    }



    return (
        <div className="row">
            {props.auth
                ? <div className="row">
                    <h2>Create Post</h2>
                    <form className="col s12" onSubmit={handleChange}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" className="validate" name="title" />
                                <span >Enter your title</span>
                            </div>
                            <div className="input-field col s12">
                                <input type="text" className="validate" name="img" />
                                <span>Enter your url picture</span>
                            </div>
                            <div className="input-field col s12">
                                <textarea name="desc" className="materialize-textarea"></textarea>
                                <span>Enter your description</span>
                            </div>
                            <div className="input-field col s12">
                                <select name="genre">
                                    <option selected defaultValue="Other" >Choose your option</option>
                                    <option value="Music">Music</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Books">Books</option>
                                </select>
                            </div>
                        </div>
                        <button className="waves-effect waves-light btn-large" type="submit">Save</button>
                    </form>
                </div>
                : <div className="row">
                    <h3>Пожалуйста авторизуйтесь</h3>
                    <NavLink className="cyan darken-3 waves-effect waves-light btn-small" to="/login">Log In</NavLink>

                </div>

            }

        </div>
    )
}

export default AddPost