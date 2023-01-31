import React from 'react';
import style from 'styles/DesktopMenu.scss';

const MenuDesktop = () => {
    return ( 
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="./" className="myaccount">Mis ordenes</a>
                </li>
                <li>
                    <a href="./" className="myorders">Mi cuenta</a>
                </li>
                <li>
                    <a href="./" className="signout">Cerrar sesion</a>
                </li>
            </ul>
        </div>
     );
}
 
export default MenuDesktop;