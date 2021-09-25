import React, { useCallback, useEffect, useState } from "react";

import { Category }    from "./Category/Category";
import { Cats }        from "./Cats/Cats";
import { useDispatch } from "react-redux";
import { catsActions } from "../store/cates/actions";

import './style.css'

export function CatsPage() {

    const dispatch          = useDispatch();
    const [limit, setLimit] = useState(10);

    const [activeCategoryId, setActiveCategoryId] = useState('');

    useEffect(() => {
        dispatch(catsActions.getCategory());
        dispatch(catsActions.getCats(limit, 1));
    }, []);

    const getCatsByCategory = useCallback((category) => {
        dispatch(catsActions.getCats(limit, 1, category.id));
        setActiveCategoryId(category.id);
    }, [limit]);

    const loadMoreCat = useCallback(() => {
        setLimit(limit+10);
        dispatch(catsActions.getCats(limit+10, 1, activeCategoryId));
    }, [limit, activeCategoryId]);

    return (
        <div className='content'>
            <div className='category'>
                <Category getCatsByCategory={getCatsByCategory}/>
            </div>
            <div className='cats'>
                <Cats loadMoreCat={loadMoreCat}/>
            </div>
        </div>
    )
};

