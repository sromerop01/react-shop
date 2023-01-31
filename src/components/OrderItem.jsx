import React from 'react';
import '../styles/OrderItem.scss'

const OrderItem = () => {
    return ( 
        <div className="OrderItem">
            <figure>
                <img src="./Assets/switch.jfif" alt="item"/>
             </figure>
            <p>Producto 1</p>
            <p>$$$$$$$</p>
            <img src="./Assets/Icons/icon_close.png" alt="close"/>
        </div>
     );
}
 
export default OrderItem;