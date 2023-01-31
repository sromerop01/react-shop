import React from 'react';
import '../components/OrderItem';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss';

const Orders = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title-my-order">Mis pedidos</h1>
                <div className="my-order-content">
                  <OrderItem/>
                </div>
            </div>
        </div>
    );
}
 
export default Orders;