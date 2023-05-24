// STYLED
import { SearchContainer } from "./styled";

const SearchBar = ({ order, setOrder, setMinValue, setMaxValue, setSearchName }) => {

  return (
    <SearchContainer>
        <div>
          <span>Search: </span>
          <input 
          type="text" 
          placeholder="Search name" 
          onChange={(event) => setSearchName(event.target.value)} 
          />
        </div>
        <div>
          <span>Value: </span>
            <input 
            type="number" 
            placeholder="Min. value" 
            onChange={(event) => setMinValue(event.target.value)} 
            />
            <input 
            type="number" 
            placeholder="Max. value"
            onChange={(event) => setMaxValue(event.target.value)} 
            />
        </div>
        <div>
          <span>Order: </span>
            <select 
            value={order} 
            onChange={(event) => setOrder(event.target.value)}
            >
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
        </div>
    </SearchContainer>
  );
};

export default SearchBar;