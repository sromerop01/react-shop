import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return ( 
        <nav className="navbar-menu">
            <img src="./Assets/Icons/icon_menu.svg" alt="menu" className="menu" />
            <div className="navbar-left">
                <img src="./Assets/Logos/logo_yard_sale.svg" alt="logo" className="logo-navbar" />
                <ul>
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
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">example@email.com</li>
                    <li className="navbar-cart">
                        <img src="./Assets/Icons/icon_shopping_cart.svg" alt="navbar-cart" />
                        <div>3</div>
                    </li>
                </ul>
            </div>
        </nav>

     );
}
 
export default Header;