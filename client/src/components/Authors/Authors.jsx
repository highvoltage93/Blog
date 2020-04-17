import React from 'react';
import './Authors.css'
// import User from '../../../utils/user.png'

const Authors = (props) => {

let authors = props.authors === 0 ? <span></span> : props.authors.map(author => {
    return(
            <div className="authors-item" key={author._id}>
                <img src={author.avatar === "" ? `https://www.arthasarathi.com/arthasarthi/images/user-img.png` : author.img } alt="" />
                <div>
                    <p className="name">{author.name}</p>
                    <span className="self">{author.email}</span>
                    <p className="posts">{author.dateRegistration}</p>
                </div>
            </div>
    )
})


    return (
        <div className="authors">
           {authors}
        </div>
    );
}

export default Authors;