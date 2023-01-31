import React, { useRef } from 'react';
import style from 'styles/Login.scss';
import Logo from 'logos/logo_yard_sale.svg';

const Login = () => {
const form = useRef(null);

    const handleSubmit = () =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data ={
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={Logo} alt="logo" className="logo" />
                <form action className="form" ref={form}>
                    <label htmlfor="email" className="label">@email</label>
                    <input type="text" name="email" placeholder="example@email.com" className="input input-email" />
                    <label htmlfor="password" className="label">Contraseña</label>
                    <input type="password" name="password" placeholder="********" className="input input-pass" />
                    <button className="primary-button login-button" 
                    onClick={handleSubmit}>
                        Iniciar Sesion
                    </button>
                </form>
                <p className="forgot">
                    <a href="/">Olvide mi contraseña</a>
                </p>
                <button className="secondary-button signup-button" 
                onClick={handleSubmit}>
                    Registrate
                </button>
            </div>
        </div>
    );
}

export default Login;