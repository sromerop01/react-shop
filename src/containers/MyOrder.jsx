import React from 'react';
import '../styles/MyOrder.scss';

const MyOrder = () => {
    return ( 
        <aside className="shopping-cart">
            <div className="shopping-cart-container">
                <div className="title-container">
                    <img src="./Assets/Icons/flechita.svg" alt="arrow"/>
                    <p className="title-container">My order</p>
                </div>
                <div className="shopping-cart-content">
                    <div className="cart-items">
                        <figure>
                            <img src="./Assets/switch.jfif" alt="item"/>
                        </figure>
                        <p>Producto 1</p>
                        <p>$$$$$$$</p>
                        <img src="./Assets/Icons/icon_close.png" alt="close"/>
                    </div>
                    <button className="primary-button add-to-cart">
                        <img src="./Assets/Icons/bt_add_to_cart.svg" alt=""/>
                        Confirmar
                    </button>
                </div>
            </div>
        </aside>
     );
}
 
export default MyOrder;