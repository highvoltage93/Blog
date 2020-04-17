import React from 'react';

const Login = ({logIn}) => {

    let onSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        logIn(user)
    }

    return (
        <div className="row">
            <form onSubmit={onSubmit} className="col s12">
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
                <button type="submit" className="cyan darken-3 waves-effect waves-light btn-small">Button</button>
            </form>
        </div>
    );
}

export default Login;