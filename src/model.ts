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


export interface CurrentUser {
    _id:string,
    username:string,
    email:string,
    isAdmin:boolean,
    createdAt:string,
    updatedAt:string,
    __v:number,
    accessToken:string
}

export interface User {
    currentUser: CurrentUser | null,
    isFetching: boolean,
    error: boolean
}

export interface RegisterUser {
    email: string,
    password: string,
    username: string,
}

//Context
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





