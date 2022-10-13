import { ActionType } from "./redux/actions/actionTypes"
import * as React from "react";

export interface Product  {
    _id: string,
    title: string,
    description: string,
    imageOne: string,
    imageTwo: string,
    imageThree: string,
    imageFour: string,
    price: number,
    formerPrice: number,
    categories: string[],
    quantity: number,
    tag: string[],
    sizes: string[]
}

export interface EcomArray{
    product: Product[],
    cart: Product[],
    viewedProduct: Product
}

export interface MyContext {
    cardModal: boolean,
    setCardModal: React.Dispatch<React.SetStateAction<boolean>>,
    cartCount: number,
    setCartCount: React.Dispatch<React.SetStateAction<number>>,
    totalAmount: number,
    setTotalAmount: React.Dispatch<React.SetStateAction<number>>,
    mobileNavModal: boolean,
    setMobileNavModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface FetchProduct {
    type: ActionType.fetch_product,
    payload: Product[]
}

interface FetchCart {
    type: ActionType.fetch_cart,
    payload: Product[]
}
interface AddCart {
    type: ActionType.add_cart
    payload: Product
}
interface FetchDetails {
    type: ActionType.fetch_details,
    payload: Product
}
interface IncreaseQty {
    type: ActionType.inc_qty,
    payload: Product
}
interface DecreaseQty {
    type: ActionType.dec_qty,
    payload: Product
}
interface DelCart {
    type: ActionType.del_cart,
    payload: string
}

export type Action = FetchProduct | FetchCart | AddCart | FetchDetails | DelCart | IncreaseQty | DecreaseQty


