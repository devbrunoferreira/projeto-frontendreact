// STYLED
import { Badge, HeaderContainer, HeaderLogo, HeaderSingIn } from './styled';

// ICONS
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ countCarItems }) => {
  return (
        <HeaderContainer>
            <HeaderLogo>
                <a href="#/">
                    <h1>Labeshop</h1>
                 </a>
                <FaShoppingCart size={30} className='cart_icon'/>
                    {' '}
                    {countCarItems ? (
                        <Badge>{countCarItems}</Badge>
                    ) : (
                        ''
                    )}
            </HeaderLogo>
            <HeaderSingIn>
                <a href="#/login">Log in</a> <a href="/#signin">Sign in</a>
            </HeaderSingIn>
        </HeaderContainer>
  );
};

export default Header;