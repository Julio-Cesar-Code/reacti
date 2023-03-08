import React from "react";
import { TodoContext } from "../todoContext";
import './TodoSearch.css';

function TodoSearch() {
    // const [SearchValue,setSearchValue] = React.useState('');
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const OnSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }
    return(
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={OnSearchValueChange}
        />
    );
}

export {TodoSearch};