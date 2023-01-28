// styles
import "./NavBar.css";

const NavBar = () => {

    return(
        <div>
            <div className="nav_1">
                <input className="input" type="" />
                <select name="preco">
                    <option></option>
                    <option value="menor_preco">Menor preço</option>
                    <option value="maior_preco">Maior preço</option>
                </select>
            </div>
        </div>
    );
};

export default NavBar;