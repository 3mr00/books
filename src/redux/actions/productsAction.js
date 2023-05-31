import { Allproducts } from "../types/productsType";
import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    const res = await axios.get("https://gutendex.com/books/");
    console.log(res.data.results);
    dispatch({
      type: Allproducts,
      data: res.data.results,
      pages: res.data.count,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`https://gutendex.com/books/?page=${page}`);

    dispatch({
      type: Allproducts,
      data: res.data.results,
      pages: res.data.count,
    });
  };
};
