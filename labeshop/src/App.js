// DATA
import Products from './data/products.json';

// STYLES
import './styles.css';

// HOOKS
import { useState } from 'react';

// COMPONENTS
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [cartItems, setCartItems] = useState([]);

  // ADICIONANDO PRODUTO AO CARRINHO
  const addingToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist){
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty +1} : x
        )
      )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  // REMOVENDO PRODUTO DO CARRINHO
  const removingFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  };

  return (
    <div>
      <Header />
      {/* <SearchBar /> */}
      <div className='row'>
        <Main products={Products} adding={addingToCart} />
        <Cart cartItems={cartItems} adding={addingToCart} removing={removingFromCart}/>
      </div>
    </div>
  );
}

export default App;
