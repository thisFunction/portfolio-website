import { GET_DOJO_ITEMS, ADD_DOJO_ITEM, DELETE_DOJO_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";

export const getDojoItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios.get("/api/dojo").then(res =>
		dispatch({
			type: GET_DOJO_ITEMS,
			payload: res.data
		})
	);
};

export const addDojoItem = item => dispatch => {
	axios.post("/api/dojo", item).then(res =>
		dispatch({
			type: ADD_DOJO_ITEM,
			payload: res.data
		})
	);
};

export const deleteDojoItem = id => dispatch => {
	axios.delete(`/api/dojo/${id}`).then(res =>
		dispatch({
			type: DELETE_DOJO_ITEM,
			payload: id
		})
	);
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
