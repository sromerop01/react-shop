import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title-create">Mi cuenta</h1>
                <form action="" className="form">
                    <label htmlFor="name" className="label">Nombre</label>
                    <input type="text" id="name" placeholder="xxxxx xxxxx" className="input input-email"/>
                    <label htmlFor="email" className="label">@email</label>
                    <input type="text" id="login-email" placeholder="example@email.com" className="input input-email"/>
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input type="password" id="login-password" placeholder="********" className="input input-pass"/>
                    <input type="submit" value="Crear" className="primary-button create-button"/>
                </form>
            </div>
        </div>
    );
}
 
export default CreateAccount;