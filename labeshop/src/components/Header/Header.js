import { FaShoppingCart } from 'react-icons/fa';


const Header = ({ countCarItems }) => {
  return (
    <div>
        <header className="header row">
            <div>
                <div className='logo'>
                    <a href="#/">
                        <h1>Labeshop</h1>
                    </a>
                    <FaShoppingCart size={30} className='cart_icon'/>
                    {' '}
                    {countCarItems ? (
                        <button className='badge'>{countCarItems}</button>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            {/* <div>
                <input type="text" size={70}/>  
                <button>Search</button>
            </div> */}
            <div className='signin'>
                <a href="#/cart">Cart</a> <a href="/#signin">Sign In</a>
            </div>
        </header>
    </div>
  );
};

export default Header;