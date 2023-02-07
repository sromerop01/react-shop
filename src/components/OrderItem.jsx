import React from 'react';
import '../styles/OrderItem.scss';
import Image from 'images/switch.jfif';
import Close from '../assets/Icons/icon_close.png';

const OrderItem = () => {
    return ( 
        <div className="OrderItem">
            <figure>
                <img src={Image} alt="item"/>
             </figure>
            <p>Producto 1</p>
            <p>$$$$$$$</p>
            <img src={Close} alt="close"/>
        </div>
     );
}
 
export default OrderItem;