// DATA
import Products from './data/products.json';

// STYLES
import './styles.css';

// HOOKS
import { useState, useEffect } from 'react';

// COMPONENTS
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState('ascending'); // Ascending and Descending order
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [searchName, setSearchName] = useState('');

  // BUSCANDO DADOS SALVOS NO LOCALSTORAGE
  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("cart_items");
    if(cartLocalStorage){
      setCartItems(JSON.parse(cartLocalStorage));
    }
  }, []);

  // SALVANDO DADOS COM LOCALSTORAGE

  useEffect(() => {
    if(cartItems.length > 0){
      localStorage.setItem("cart_items", JSON.stringify(cartItems));
    }
  }, [cartItems]);


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
      <SearchBar
      order={order}
      setOrder={setOrder}
      setMinValue={setMinValue}
      setMaxValue={setMaxValue}
      setSearchName={setSearchName}
      />
      <div className='row'>
        <Main 
        products={Products} 
        adding={addingToCart} 
        order={order}
        minValue={minValue}
        maxValue={maxValue}
        searchName={searchName}
        />
        <Cart 
        cartItems={cartItems} 
        adding={addingToCart} 
        removing={removingFromCart}
        />
      </div>
    </div>
  );
}

export default App;
