import './Card.css';

const Card = ({ name, price, image }) => {

    

    return(
        <div>
            <div className="produto">
                <img className="tshirt" src={image} alt={name} />
                <div>
                    <p className="product_title">{name}</p>
                    <p className="product_price">${price}</p>
                    <button className="product_button">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;