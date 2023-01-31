import React from 'react';
import style from 'styles/Login.scss';
import Logo from 'logos/logo_yard_sale.svg';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={Logo} alt="logo" className="logo"/>
                <form action="" className="form">
                    <label htmlFor="email" className="label">@email</label>
                    <input type="text" id="login-email" placeholder="example@email.com" className="input input-email"/>
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" id="login-password" placeholder="********" className="input input-pass"/>
                    <input type="submit" value="Ingresa" className="primary-button login-button"/>
                </form>
                <p className="forgot">
                    <a href="/">Olvide mi contraseña</a>
                </p>
                <button className="secondary-button signup-button">Registrate</button>
            </div>
        </div>
    );
}
 
export default Login;