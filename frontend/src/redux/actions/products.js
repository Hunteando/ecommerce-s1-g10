import axios from "axios";
import { types } from "../types";

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/products')

            dispatch({
                type: types.getProducts,
                payload: data.products
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProductById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/products/${id}`)

            dispatch({
                type: types.getProductById,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}