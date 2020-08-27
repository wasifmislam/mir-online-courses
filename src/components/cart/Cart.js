import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total,crs)=> total + crs.Fees, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.Fees

        
    }
    return (
        <div>
            <h4>Order Summary</h4>
             <p>Courses ordered: {cart.length}</p>
             <p>Course Fee:{total}</p>
             <p>Total Cost: {total}</p>
        </div>
    );
};

export default Cart;