import { types } from "../types";

const initalState = {
    data: [],
    productDetail: {}
}

export const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.getProducts:
            return {
                ...state,
                data: action.payload
            }

        case types.getProductById:
            return {
                ...state,
                productDetail: action.payload
            }

        default:
            return state;
    }
}