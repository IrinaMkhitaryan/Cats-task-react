import { combineReducers } from "redux"

import { catsReducer as cats} from "./cates/reduser";

export const reducers = combineReducers({
    cats,
});