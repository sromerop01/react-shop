import React from 'react';
import style from 'styles/PasswordRecovery.scss';
import Logo from 'logos/logo_yard_sale.svg';
import IconEmail from 'icons/email.svg';


const PaswordRecovery = () => {
    return ( 
        <div className="login">
            <div className="form-container recovery">
                <img src={Logo} alt="logo" className="logo"/>
                <h1 className="title">El correo a sido enviado</h1>
                <p className="subtitle">Por favor revisa tu bandeja para seguir las instrucciones</p>
                <div className="image-email">
                    <img src={IconEmail} alt=""/>
                </div>
                <button className="primary-button login-button">Ingresar</button>
                <p className="resend">
                    <span>No reciviste el corre?</span>
                    <a href="/">Reenviar</a>
                </p>
            </div>
        </div>
     );
}
 
export default PaswordRecovery;