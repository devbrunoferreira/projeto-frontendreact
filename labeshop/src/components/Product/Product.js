// STYLED
import { ProductContainer, Image, Information, AddToCart } from "./styled";

const Product = ({ product, adding }) => {

  return (
    <ProductContainer>
        <Image src={product.image} alt="" />
        <Information>
            <p>{product.name}</p>
            <span>$ {product.price.toFixed(2)}</span>
        </Information>
        <AddToCart onClick={() => adding(product)}>Add to Cart</AddToCart>
    </ProductContainer>
  );
};

export default Product;