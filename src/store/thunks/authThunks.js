import { setUser, clearUser, clearToken } from "../actions/clientActions";
import axiosInstance from "../../api/axiosInstance";
import {
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  setUserRequest,
  setUserError,
} from "../actions/authActions";
import { toast } from "react-toastify";

export const handleLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setUserRequest());
      const response = await axiosInstance.post("/login", {
        email: data.email,
        password: data.password,
      });
      const user = await response.data;
      dispatch(setUser(user));
    } catch (error) {
      console.log(error, "User Login Error");
      dispatch(setUserError(error));
    }
  };
};

export const logoutUser = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    localStorage.removeItem("token"); // localStorage'dan tokeni kaldır
    dispatch(clearUser()); // Redux'tan kullanıcı bilgilerini temizle
    dispatch(clearToken()); // Redux'tan tokeni temizle
    dispatch(logoutSuccess());
    toast.success("Successfully logged out.");
  } catch (error) {
    console.error("Logout error:", error); // Hata durumunda consola log at
    dispatch(logoutFailure(error.message));
    toast.error("Logout failed. Please try again.");
  }
};
