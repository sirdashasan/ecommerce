import axiosInstance from "../../api/axiosInstance";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE";

export const createOrder = (orderData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const response = await axiosInstance.post("/order", orderData);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
    dispatch(setCart([])); // Sepeti temizle
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

// Sepeti temizleme aksiyonu
export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});
