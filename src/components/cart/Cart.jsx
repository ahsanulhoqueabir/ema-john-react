import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart[0]);
    let total =0;
    let totalShipping=0;
    for(const product of cart)
    {
        total += product.price;
        totalShipping+=product.shipping;
    }
    const tax = (total*7)/100;
    const grandTotal = total + tax+totalShipping;
    return (
        <div className='cart'>
            <h4 className='title'>Order Summary</h4>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;