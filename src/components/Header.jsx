import React, { useState } from 'react';
import style from 'styles/Header.scss';
import DesktopMenu from 'components/DesktopMenu';
import IconMenu from 'icons/icon_menu.svg';
import Logo from 'logos/logo_yard_sale.svg';
import IconShoppingCart from 'icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return ( 
        <nav className="navbar-menu">
            <img src={IconMenu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={Logo} alt="logo" className="logo-navbar" />
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
                    <li className="navbar-email" onClick={handleToggle}>
                        example@email.com
                    </li>
                    <li className="navbar-cart">
                        <img src={IconShoppingCart} alt="navbar-cart" />
                        <div>3</div>
                    </li>
                </ul>
            </div>
            {toggle && <DesktopMenu/>}
        </nav>

     );
}
 
export default Header;