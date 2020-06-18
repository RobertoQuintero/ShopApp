import { ADD_TO_CART } from "../actions/cartActions";
import CartItem from "../../models/cartItem";

const iniialState = {
  items: {},
  totalAmount: 0,
};

export default (state = iniialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedPoduct = action.product;
      const productPrice = addedPoduct.price;
      const productTitle = addedPoduct.title;

      let updatedOrNewCartItem;
      if (state.items[addedPoduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedPoduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedPoduct.id].sum + productPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedPoduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + productPrice,
      };
    default:
      return state;
  }
};
