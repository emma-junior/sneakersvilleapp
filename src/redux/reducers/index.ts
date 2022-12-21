import { combineReducers } from "redux";
// import reducer from "./reducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer
})

export default reducers

export type State = ReturnType<typeof reducers>