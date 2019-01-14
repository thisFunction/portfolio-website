import { GET_DOJO_ITEMS, ADD_DOJO_ITEM, DELETE_DOJO_ITEM } from './types';

export const getDojoItems = () => {
    return {
        type: GET_DOJO_ITEMS
    }
}

export const deleteDojoItem = (id) => {
    return {
        type: DELETE_DOJO_ITEM,
        payload: id
    }
} 

export const addDojoItem = (item) => {
    debugger
    return {
        type: ADD_DOJO_ITEM,
        payload: item
    }
}