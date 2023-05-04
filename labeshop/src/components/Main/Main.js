import Product from "../Product/Product";

const Main = ({ products, adding }) => {

  return (
    <div className="main column-2">
        {products.map( product => (
            <Product key={product.id} product={product} adding={adding}/>
        ))}
    </div>
  );
};

export default Main;