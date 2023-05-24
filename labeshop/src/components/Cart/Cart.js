// REACT ICONS
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

// STYLED
import { CartContainer, Row, Column1, Column2, CheckOutButton } from './styled';

const Cart = ({ cartItems, adding, removing }) => {

  const itemsPrice = cartItems.reduce((accumulatory, current) => accumulatory + current.price * current.qty , 0);
  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 100 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <CartContainer>
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart is empty!</div>}</div>
        {cartItems.map( item => (
          <Row key={item.id} >
            <Column2>{item.name}</Column2>
            <Column2>
              <FaPlusCircle size={15} onClick={() => adding(item)} className='add' />
              <FaMinusCircle size={15} onClick={() => removing(item)} className='remove' />
            </Column2>
            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </Row>
        ))}
        {cartItems.length !== 0 && (
          <>
            <br/>
            <hr/>
            <br/>
              <Row>
                <Column2>Items Price</Column2>
                <Column1>$ {itemsPrice.toFixed(2)}</Column1>
              </Row>
              <Row>
                <Column2>Tax Price</Column2>
                <Column1>$ {taxPrice.toFixed(2)}</Column1>
              </Row>
              <Row>
                <Column2>Shipping Price</Column2>
                <Column1>$ {shippingPrice.toFixed(2)}</Column1>
              </Row>
              <br/>
              <Row>
                <Column2><strong>Total Price</strong></Column2>
                <Column1>$ {totalPrice.toFixed(2)}</Column1>
              </Row>
              <br/>
              <CheckOutButton>Checkout</CheckOutButton>
          </>
        )}
    </CartContainer>
  );
};

export default Cart;