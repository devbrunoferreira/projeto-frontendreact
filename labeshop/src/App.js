// components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Products from './data/products.json';

// images
import Cart from './img/cart_header.jpg';

// style
import './App.css';

function App() {

  // const products = [
  //   {
  //     name: "Camiseta 01",
  //     price: 20.00,
  //     img: {Camisa01}
  //   }
  // ]


  return (
    <div className="App">
      <Header image={Cart}/>
      <NavBar />
      <Main 
      products={Products} 
      />
    </div>
  );
}

export default App;
