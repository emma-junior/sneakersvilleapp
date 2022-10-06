import { combineReducers } from "redux";
import reducer from "./reducer";

// export default combineReducers({
//     products: reducer,
//   });

const reducers = combineReducers({
    products: reducer,
})

export default reducers

  export type State = ReturnType<typeof reducers>