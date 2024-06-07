import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import addressReducer from "./adressReducer";
import paymentReducer from "./paymentReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  address: addressReducer,
  payment: paymentReducer,
});

export default rootReducer;
