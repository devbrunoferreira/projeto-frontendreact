// DATA
import Products from './data/products.json';

// STYLES
import './styles.css';

// COMPONENTS
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div>
      <Header />
      <div className='row'>
        <Main products={Products} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
