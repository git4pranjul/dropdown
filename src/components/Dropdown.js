import React, { useState } from "react";
import styles from "../styles/module.dropdown.css";

const Dropdown = ({ items }) => {
const [showDropdown, setShowDropdown] = useState(false);
const [selectedOption, setSelectedOption] = useState("");


const toggleDropdown = () => {
setShowDropdown(!showDropdown);
};

const handleOptionClick = (option) => {
setSelectedOption(option);
setShowDropdown(false);
};

return (
<div className="dropdown">
    <div className="dropdown-menu" onClick={toggleDropdown} onMouseEnter={()=>{setShowDropdown(true)}}>
    {selectedOption || "Select an option"}
    <i className="fa-solid fa-caret-down"></i>
    </div>
    {showDropdown && (
    <ul className="menu-items">
        {items.map((item) => (
        <li key={item} onClick={() => handleOptionClick(item)}>
            {item}
        </li>
        ))}
    </ul>
    )}

    {selectedOption===""?"":<h3 className="select-option">Selected Option : {selectedOption}</h3>}
</div>
);
};

export default Dropdown;