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
    console.log("Categories fetched successfully:", response.data);
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
    console.log("Products fetched successfully:", response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch(setFetchState("ERROR"));
  }
};
