// styles
import "./Header.css";

const Header = (props) => {

    return(
        <div>
            <div className="header_1">
                <h2>Labeshop</h2>
                <img src={props.image} alt="" className="cart_image" />
            </div>
        </div>
    );
};

export default Header;