import { ActionType } from "../actions/actionTypes";
import { Product } from "../../model";
import { AnyAction } from 'redux'

const cartReducer = (state = [], action:AnyAction) => {
    
    switch(action.type){
        case ActionType.add_cart:
            const inCart = state.find((item:Product) => item._id === action.payload._id ? true:false)
            return inCart ? [...state] : [...state, action.payload]                
        case ActionType.del_cart:
            return state.filter((item:Product) => item._id !== action.payload)
        case ActionType.inc_qty:
           return state.map((item:Product) => item._id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item,)
            
        case ActionType.dec_qty:
            return state.map((item:Product) => item._id === action.payload
            ? {...item, quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
              }
            : item,
        )
            
        case ActionType.adjust_qty:
            return [
              state.map((item:Product) => item._id === action.payload.id ? {...item, quantity: action.payload.qty} : item ),
            ];
        case ActionType.del_all:
            return state = []
        default:
            return state

    }
}
export default cartReducer