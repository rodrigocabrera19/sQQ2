import React from 'react';
import './style.css';

const Login = () => {
    return (
        <div className="login-container">
            <section className="title-section">
                <h2>CHRISLUGICA</h2>
                <hr />
            </section>
            <section className="login-section">
                <form className="login-form">
                    <label For="username">
                        <input type="text" placeholder="USERNAME"/>
                    </label>
                    <label For="password">
                        <input type="password" placeholder="PASSWORD"/>
                    </label>
                </form>
                <div className="login-remember">
                    <div className="remember"><div className="rombo-remember"></div><p>Remember me</p></div>
                    <p>Forgot password?</p>
                </div>
                <div className="button-login">
                    <button>LOGIN</button>
                </div>
            </section>
        </div>
    )
}

export default Login
