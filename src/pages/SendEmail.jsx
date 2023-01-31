import React from 'react';

const SendEmail = () => {
    return (
        <div class="login">
            <div class="form-container recovery">
                <img src="./Assets/Logos/logo_yard_sale.svg" alt="logo" class="logo"/>
                <h1 class="title">El correo a sido enviado</h1>
                <p class="subtitle">Por favor revisa tu bandeja para seguir las instrucciones</p>
                <div class="image-email">
                    <img src="./Assets/Icons/email.svg" alt=""/>
                </div>
                <button class="primary-button login-button">Ingresar</button>
                <p class="resend">
                    <span>No reciviste el corre?</span>
                    <a href="/">Reenviar</a>
                </p>
            </div>
        </div>
    );
}
 
export default SendEmail;