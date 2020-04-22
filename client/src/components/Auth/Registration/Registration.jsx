import React from 'react';
import './registration.css'

const Registration = (props) => {
    let submitForm = (e) => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            avatar: e.target.avatar.files[0]
        }
        props.setAuth(user)
    }

    return (
        <div className="row reg">
            <h4>Enter all fields for registration</h4>
            <form onSubmit={submitForm} className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                <div className="input-field col s12">
                    <input id="avatar" type="file" className="validate" />
                    <label htmlFor="avatar">Your Avatar</label>
                </div>
            </div>
                <button className="waves-effect waves-light btn-small cyan lighten-1">Registration</button>
            </form>
        </div>
    );
}

export default Registration;