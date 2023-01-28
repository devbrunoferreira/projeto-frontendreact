import Card from "../Card/Card";

import "./Main.css";

const Main = ({ products }) => {

    // console.log(products);

    return (
        <div>
            <div className="main">
                {products.map((product) => (
                    <Card 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;