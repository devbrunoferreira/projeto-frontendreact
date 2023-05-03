import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
  return (
    <div>
        <header className="header row">
            <div>
                <div className='logo'>
                    <a href="#/">
                        <h1>Labeshop</h1>
                    </a>
                    <FaShoppingCart size={30}/>
                </div>
            </div>
            {/* <div>
                <input type="text" size={70}/>  
                <button>Search</button>
            </div> */}
            <div>
                <a href="#/cart">Cart</a> <a href="/#signin">Sign In</a>
            </div>
        </header>
    </div>
  );
};

export default Header;