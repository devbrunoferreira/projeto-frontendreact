import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Cart = ({ cartItems, adding, removing }) => {

  const itemsPrice = cartItems.reduce((accumulatory, current) => accumulatory + current.price * current.qty , 0);
  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 100 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="block cart column-1">
        <h2 className="cart-h2">Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart is empty!</div>}</div>
        {cartItems.map( item => (
          <div key={item.id} className='row' >
            <div className='column-2'>{item.name}</div>
            <div className='column-2'>
              <FaPlusCircle size={15} onClick={() => adding(item)} className='add' />
              <FaMinusCircle size={15} onClick={() => removing(item)} className='remove' />
            </div>
            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <br/>
            <hr/>
            <br/>
              <div className='row'>
                <div className='column-2'>Items Price</div>
                <div className='column-1 text-right margin-left'>$ {itemsPrice.toFixed(2)}</div>
              </div>
              <div className='row'>
                <div className='column-2'>Tax Price</div>
                <div className='column-1 text-right margin-left'>$ {taxPrice.toFixed(2)}</div>
              </div>
              <div className='row'>
                <div className='column-2'>Shipping Price</div>
                <div className='column-1 text-right margin-left'>$ {shippingPrice.toFixed(2)}</div>
              </div>
              <br/>
              <div className='row'>
                <div className='column-2'><strong>Total Price</strong></div>
                <div className='column-1 text-right margin-left'>$ {totalPrice.toFixed(2)}</div>
              </div>
              <br/>
              <button className='button'>Checkout</button>
          </>
        )}
    </div>
  );
};

export default Cart;