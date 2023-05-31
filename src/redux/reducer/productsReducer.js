import { Allproducts } from "../types/productsType";

const initalValue = { products: [], pageCount: 0 };

export const productsReducer = (state = initalValue, action) => {
  switch (action.type) {
    case Allproducts:
      return { products: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
