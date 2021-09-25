import React from "react";

import { useSelector } from "react-redux";

import './style.css'

export const Cats = (props) => {
    const {
        loadMoreCat
    } = props;
    const cats = useSelector((state) => state.cats.catsData);

    return (
        <>
            <div className='imageContent'>
                {cats.length && cats.map(cat => (
                    <img src={cat.url} className='image'/>
                ))}

            </div>
            <div>
                <button onClick={loadMoreCat} className='loadButton'>Load more cat</button>
            </div>
        </>
    )
};