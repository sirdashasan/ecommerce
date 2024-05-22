import axiosInstance from "../../api/axiosInstance";
import {
  setCategories,
  setFetchState,
  setProductList,
  setTotal,
} from "../actions/productActions";

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/categories");
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING"));
    const response = await axiosInstance.get("/products");
    dispatch(setProductList(response.data.products));
    dispatch(setTotal(response.data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch(setFetchState("ERROR"));
  }
};

export const getProducts = (categoryId, filter, sort, limit, offset) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/products?${categoryId ? `category=${categoryId}` : ""}${
          filter ? `&filter=${filter}` : ""
        }${sort ? `&sort=${sort}` : ""}${limit ? `&limit=${limit}` : ""}${
          offset ? `&offset=${offset}` : ""
        }`
      );
      console.log(
        `/products?${categoryId ? `category=${categoryId}` : ""}${
          filter ? `&filter=${filter}` : ""
        }${sort ? `&sort=${sort}` : ""}${limit ? `&limit=${limit}` : ""}${
          offset ? `&offset=${offset}` : ""
        }`
      );
      console.log(response.data);
      dispatch(setTotal(response?.data.total));
      dispatch(setProductList(response?.data.products));
    } catch (error) {
      console.log(error, "product error");
    }
  };
};
