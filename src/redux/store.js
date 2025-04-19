// src/redux/store.js
import { createStore } from "redux";

const initialState = {
  cart: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;
