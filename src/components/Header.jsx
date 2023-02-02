import React, { useState, useContext } from 'react';
import style from 'styles/Header.scss';
import DesktopMenu from 'components/DesktopMenu';
import MyOrder from 'containers/MyOrder';
import IconMenu from 'icons/icon_menu.svg';
import Logo from 'logos/logo_yard_sale.svg';
import IconShoppingCart from 'icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    // const handleToggle = () => {
    //     setToggle(!toggle);
    // }

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
                    <li className="navbar-email" 
                        onClick={() => setToggle(!toggle)}>
                        example@email.com
                    </li>
                    <li className="navbar-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={IconShoppingCart} alt="navbar-cart" />
                        <div>{state.cart.length}</div>
                    </li>
                </ul>
            </div>
            {toggle && <DesktopMenu/>}
            {toggleOrders && <MyOrder/>}
        </nav>

     );
}
 
export default Header;