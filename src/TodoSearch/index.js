import React from "react";
import './TodoSearch.css';

function TodoSearch({SearchValue,setSearchValue}) {
    // const [SearchValue,setSearchValue] = React.useState('');

    const OnSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }
    return(
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={SearchValue}
            onChange={OnSearchValueChange}
        />
    );
}

export {TodoSearch};