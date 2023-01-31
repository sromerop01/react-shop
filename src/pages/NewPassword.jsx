import React from 'react';
import '../styles/NewPassword.scss';

const NewPassword = () => {
    return ( 
        <div class="login">
            <div class="form-container new-password">
                <img src="./Assets/Logos/logo_yard_sale.svg" alt="logo" class="logo"/>
                <h1 class="title">Crea una nueva contraseña</h1>
                <p class="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
                <form action="" class="form">
                    <label for="password" class="label">Contraseña</label>
                    <input type="password" id="password" placeholder="********" class="input input-pass"/>
                    <label for="new-password" class="label">Reingrese la contraseña</label>
                    <input type="password" id="new-password" placeholder="********" class="input input-pass"/>
                    <input type="submit" value="Confirmar" class="primary-button login-button"/>
                </form>
            </div>
        </div>
     );
}
 
export default NewPassword;