import { ActionType } from "./actionTypes";
import { Product } from "../../model";

export const addToCart = ( item:Product) => {
    return {
        type: ActionType.add_cart,
        payload: item
    }
}

export const removeFromCart = (id:string) => {
    return {
        type: ActionType.del_cart,
        payload: id
    }
}

export const increaseQty = (id:string) => {
    return {
        type: ActionType.inc_qty,
        payload: id
    }
}
export const decreaseQty = (id:string) => {
    return {
        type: ActionType.dec_qty,
        payload: id
    }
}

export const adjustQty = (itemID:string, value:number) => {
    return {
        type: ActionType.adjust_qty,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const removeAllItem = () => {
    return {
        type: ActionType.del_all
    }
}
