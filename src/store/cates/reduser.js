import { catsActionTypes } from "./actions";

const initialState = {
    category: [],
    catsData: []
};

export const catsReducer = (state = initialState, action) => {
    switch(action.type) {
        case catsActionTypes.GET_CATEGORY_SUCCESS:
            return { ...state, category: action.payload };
        case catsActionTypes.GET_CATS_SUCCESS:
            return { ...state, catsData: action.payload };
        default:
            return state
    }
};