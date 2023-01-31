import React from 'react';
import '../styles/Order.scss';
import Arrow from 'icons/flechita.svg';

const Order = () => {
    return ( 
        <div className="Order">
            <p>
                <span>XX/XX/XX</span>
                <span>X Articulos</span>
            </p>
            <p>$$$$$</p>
            <img src={Arrow} alt="arrow"/>
        </div>
     );
}
 
export default Order;