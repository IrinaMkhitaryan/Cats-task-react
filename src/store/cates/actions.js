export const catsActionTypes = {
    GET_CATEGORY_REQUEST: 'CAT.GET_CATEGORY_REQUEST',
    GET_CATEGORY_SUCCESS: 'CAT.GET_CATEGORY_SUCCESS',
    GET_CATEGORY_FAILURE: 'CAT.GET_CATEGORY_FAILURE',
    GET_CATS_REQUEST: 'GET_CATS_REQUEST',
    GET_CATS_SUCCESS: 'GET_CATS_SUCCESS',
    GET_CATS_FAILURE: 'GET_CATS_FAILURE',
};

export const catsActions = {
    getCategoryRequest: () => ({ type: catsActionTypes.GET_CATEGORY_REQUEST }),
    getCategorySuccess: (data) => ({ type: catsActionTypes.GET_CATEGORY_SUCCESS, payload: data }),
    getCategoryFailure: (err) => ({ type: catsActionTypes.GET_CATEGORY_FAILURE, payload: err }),
    getCatsRequest: () => ({ type: catsActionTypes.GET_CATS_REQUEST }),
    getCatsSuccess: (data) => ({ type: catsActionTypes.GET_CATS_SUCCESS, payload: data }),
    getCatsFailure: (err) => ({ type: catsActionTypes.GET_CATS_FAILURE, payload: err }),

    getCategory: () => async (dispatch) => {
        dispatch(catsActions.getCategoryRequest);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/categories');
            const data = await response.json();

            dispatch(catsActions.getCategorySuccess(data));
        } catch(error) {
            dispatch(catsActions.getCategoryFailure(error));
        }
    },
    getCats: (limit, page, categoryId) => async (dispatch) => {
        dispatch(catsActions.getCatsRequest);

        try {
            const response = await fetch(categoryId ?
                `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`:
                `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`);
            const data = await response.json();

            dispatch(catsActions.getCatsSuccess(data));
        } catch(error) {
            dispatch(catsActions.getCatsFailure(error));
        }
    }
};