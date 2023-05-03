
const Product = ({ product }) => {

  return (
    <div className="product">
        <img src={product.image} alt="" />
        <div className="information">
            <span>{product.name}</span>
            <span>{product.price}</span>
        </div>
        <button className="add-cart">Add to Cart</button>
    </div>
  );
};

export default Product;