import { EcomArray} from "../../model";
import { Action } from "../../model";
import { ActionType } from "../actions/actionTypes";
import { Product } from "../../model";
// import { fetch_product, fetch_cart, add_cart } from "../actions/actionTypes";

const initialState : EcomArray = {
    product: [],
    cart: [],
    viewedProduct: <Product>{}
}

const reducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.fetch_product:
            return {
                ...state,
                product: action.payload
            }
        case ActionType.fetch_details:
            return {
                ...state,
                viewedProduct: action.payload
            }
        case ActionType.fetch_cart:
            return {
                ...state,
                cart: action.payload
            }
        case ActionType.add_cart:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case ActionType.del_cart:
            return state.cart.filter((cart) => cart._id !== action.payload);
        case ActionType.inc_qty:
            return state.cart.map((cart) => cart._id === action.payload._id ? action.payload : cart)
        case ActionType.dec_qty:
            return state.cart.map((cart) => cart._id === action.payload._id ? action.payload : cart)
        default:
        return state;
    }
};

// const reducer = (state = initialState, action:any) => {
//     console.log(initialState)
//     switch(action.type) {
        // case add_cart:
        //     const item = action.payload;

        //     const existItem = state.cart.find((x) => x._id === item._id)

        //     if (existItem) {
        //         return {
        //             ...state,
        //             cart: state.cart.map((x) => x._id === existItem._id ? item : x)
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             cart: [...state.cart, item]
        //         }
        //     }
//             default:
//                 return state;
//     }
// }

export default reducer
