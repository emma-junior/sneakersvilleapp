import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import allReducers from "./reducers/index";
import reducers from "./reducers";
// import { Dispatch } from "redux";

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

// export const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>
export const dispatchStore = store.dispatch