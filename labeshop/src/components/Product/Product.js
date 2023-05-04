
const Product = ({ product, adding }) => {

  return (
    <div className="product">
        <img src={product.image} alt="" />
        <div className="information">
            <h3>{product.name}</h3>
            <span>$ {product.price}</span>
        </div>
        <button className="button" onClick={() => adding(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;