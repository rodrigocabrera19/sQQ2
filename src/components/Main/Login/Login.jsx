import React, {useState} from 'react';
import './style.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password')
    const handlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
        password.length ? setType(type) : setType('password')
    }

    const handleShow = () => {
        setType(type === 'password' ? 'text' : 'password')
    }

    const handleRememberRombo = () => {
        const rombo = document.querySelector('.rombo-remember');
        rombo.classList.contains('background-rombo') ? rombo.classList.remove('background-rombo') : rombo.classList.add('background-rombo');
        
    }
 

    return (
        <div className="login-container">
            <section className="section-title">
                <h2 className="title-login">CHRISLUGICA</h2>
                <hr />
            </section>
            <form className="login-form">
                <section className="input-section">
                    <label For="username">
                        <input type='text' className="input-login" placeholder="USERNAME"/>
                    </label>
                    <label For="password">
                        <input type={type} className="input-login" placeholder="PASSWORD" value={password} onChange={handlePassword}/>
                        <p className="show" onClick={handleShow}>SHOW</p>
                    </label>
                </section>
                <div className="login-remember" >
                    <div className="remember" onClick={handleRememberRombo}>
                        <div className="rombo-remember"></div>
                        <p style={{cursor:"pointer"}}>Remember me</p>
                    </div>
                    <p><a href="#" id="forgot-password">Forgot password?</a></p>
                </div>
                <div className="button-login">
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
    )
}

export default Login
