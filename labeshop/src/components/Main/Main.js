import Product from "../Product/Product";

const Main = ({ products }) => {

  return (
    <div className="main column-2">
        {products.map( product => (
            <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Main;