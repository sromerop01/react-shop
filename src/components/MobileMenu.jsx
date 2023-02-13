import React from 'react';
import '../styles/MobileMenu.scss'

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <ul>
                <li>
                <a href>CATEGORIAS</a>
                </li>
                <li>
                <a href="./" className="all">Todo</a>
                </li>
                <li>
                <a href="./" className="clothes">Ropas</a>
                </li>
                <li>
                <a href="./" className="electronics">Electrodomesticos</a>
                </li>
                <li>
                <a href="./" className="furnitures">Muebles</a>
                </li>
                <li>
                <a href="./" className="toys">Juguetes</a>
                </li>
                <li>
                <a href="./" className="others">Otros</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="./" className="myaccount">Mis ordenes</a>
                </li>
                <li>
                <a href="./" className="myorders">Mi cuenta</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="./" className="email">example@email.com</a>
                </li>
                <li>
                <a href="./" className="signout">Cerrar sesion</a>
                </li>
            </ul>
        </div>
    );
}
 
export default MobileMenu;