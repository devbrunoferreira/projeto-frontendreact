
const Product = ({ product, adding }) => {

  return (
    <div className="product">
        <img src={product.image} alt="" />
        <div className="information">
            <p>{product.name}</p>
            <span>$ {product.price.toFixed(2)}</span>
        </div>
        <button className="button" onClick={() => adding(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;