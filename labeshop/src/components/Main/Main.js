// STYLED
import { MainContainer } from "./styled";

// COMPONENTS
import Product from "../Product/Product";

const Main = ({ products, adding, order, minValue, maxValue, searchName }) => {

  return (
    <MainContainer>
        {products
        // BUSCA OS PRODUTOS POR ORDEM CRESCENTE E DECRESCENTE
        .sort((product1, product2) => {
          return order === 'ascending' 
          ? product1.name.localeCompare(product2.name)
          : product2.name.localeCompare(product1.name)
        })
        // BUSCA OS PRODUTOS POR MENOS PREÇO
        .filter( product => {
          return minValue ? product.price >= minValue : product;
        })
        // BUSCA OS PRODUTOS POR MAIOR PREÇO
        .filter( product => {
          return maxValue ? product.price <= maxValue : product;
        })
        // BUSCA OS PRODUTOS POR NOME
        .filter( product => {
          return product.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // RENDERIZA TODOS OS PRODUTOS NA TELA
        .map( product => (
            <Product key={product.id} product={product} adding={adding}/>
        ))}
    </MainContainer>
  );
};

export default Main;