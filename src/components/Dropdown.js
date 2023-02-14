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
    <button className="dropdown-toggle" onClick={toggleDropdown} onMouseOver={()=>{setShowDropdown(true);}}>
    {selectedOption || "Select an option"}
    </button>
    {showDropdown && (
    <ul className="dropdown-menu">
        {items.map((item) => (
        <li key={item} onClick={() => handleOptionClick(item)}>
            {item}
        </li>
        ))}
    </ul>
    )}
</div>
);
};

export default Dropdown;