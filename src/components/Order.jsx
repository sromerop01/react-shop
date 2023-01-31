import React from 'react';
import '../styles/Order.scss';

const Order = () => {
    return ( 
        <div className="Order">
            <p>
                <span>XX/XX/XX</span>
                <span>X Articulos</span>
            </p>
            <p>$$$$$</p>
            <img src="./Assets/Icons/flechita.svg" alt="arrow"/>
        </div>
     );
}
 
export default Order;