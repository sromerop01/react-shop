import React from 'react';
import '../styles/NewPassword.scss';

const NewPassword = () => {
    return ( 
        <div className="login">
            <div className="form-container new-password">
                <img src="./Assets/Logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">Crea una nueva contraseña</h1>
                <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
                <form action="" className="form">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="********" className="input input-pass"/>
                    <label htmlFor="new-password" className="label">Reingrese la contraseña</label>
                    <input type="password" id="new-password" placeholder="********" className="input input-pass"/>
                    <input type="submit" value="Confirmar" className="primary-button login-button"/>
                </form>
            </div>
        </div>
     );
}
 
export default NewPassword;