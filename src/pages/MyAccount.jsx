import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title-create">Mi cuenta</h1>
                <form action="" className="form">
                    <label htmlFor="name" className="label">Nombre</label>
                    <p className="edit">xxxxx xxxxx</p>
                    <label htmlFor="email" className="label">@email</label>
                    <p className="edit">example@email.com</p>
                    <label htmlFor="password" className="label">Contraseña</label>
                    <p className="edit">********</p>
                    <input type="submit" value="Editar" className="secondary-button edit-button"/>
                </form>
            </div>
        </div>
    );
}
 
export default MyAccount;