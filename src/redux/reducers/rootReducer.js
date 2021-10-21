import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducers";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
});
export default rootReducer;
