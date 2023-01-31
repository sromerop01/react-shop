import React from 'react';
import '../components/OrderItem';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss';

const Orders = () => {
    return (
        <div class="my-order">
            <div class="my-order-container">
                <h1 class="title-my-order">Mis pedidos</h1>
                <div class="my-order-content">
                  <OrderItem/>
                </div>
            </div>
        </div>
    );
}
 
export default Orders;