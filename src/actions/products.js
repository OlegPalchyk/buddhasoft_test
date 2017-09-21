export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export function getProducts(){
    return {
        type : GET_ITEMS_SUCCESS
    }
}
export function addItem(item) {
    return {
        type : ADD_PRODUCT_SUCCESS,
        item
    }
}

