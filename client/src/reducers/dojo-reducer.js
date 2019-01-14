import uuid from "uuid";
import {
  GET_DOJO_ITEMS,
  ADD_DOJO_ITEM,
  DELETE_DOJO_ITEM
} from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Adam" },
    { id: uuid(), name: "Mary" },
    { id: uuid(), name: "Zoe" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DOJO_ITEMS:
      return {
        ...state
      };
    case ADD_DOJO_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_DOJO_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
