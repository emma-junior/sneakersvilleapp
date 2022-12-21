// import { EcomArray} from "../../model";
// import { Action } from "../../model";
// import { ActionType } from "../actions/actionTypes";
// import { Product } from "../../model";

// const initialState : EcomArray = {
//     product: [],
//     cart: [],
//     viewedProduct: <Product>{}
// }

// const reducer = (state = initialState, action:Action) => {
//     switch (action.type) {
//         case ActionType.fetch_product:
//             return {
//                 ...state,
//                 product: action.payload
//             }
//         case ActionType.fetch_details:
//             return {
//                 ...state,
//                 viewedProduct: action.payload
//             }
//         case ActionType.fetch_cart:
//             return {
//                 ...state,
//                 cart: action.payload
//             }
//         // case ActionType.add_cart:
//         //     return {
//         //         ...state,                
//         //         cart: [...state.cart, action.payload]
//         //     }
//         // case ActionType.del_cart:
//         //     return {
//         //         ...state,
//         //         cart: state.cart.filter((cart) => cart._id !== action.payload)
//         //     } 
//         // case ActionType.inc_qty:
//         //     return {
//         //         ...state,
//         //         cart: state.cart.map((cart) => cart._id === action.payload._id ? action.payload : cart)
//         //     } 
//         // case ActionType.dec_qty:
//         //     return {
//         //         ...state,
//         //         cart: state.cart.map((cart) => cart._id === action.payload._id ? action.payload : cart)
//         //     } 
//         default:
//         return state;
//     }
// };

// export default reducer

export const me = "hello world"