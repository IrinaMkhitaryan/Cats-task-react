import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./style.css";

export const Category = (props) => {
    const {
        getCatsByCategory
    } = props;

    const category = useSelector((state) => state.cats.category);
    const [active, setActive] = useState('');

    const setActiveCategory = (category) => {
        setActive(category.name);
        getCatsByCategory(category);
    };
    return (
        <div>
            <ul>
                {category.length && category.map(item => (
                <li key={item.id} onClick={() => setActiveCategory(item)} className={active === item.name ? 'active' : ''}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
};