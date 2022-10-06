import * as api from "../../api";
import { Product } from "../../model";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "../../model";


export const getProduct = () => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await api.fetchProduct();
  
      dispatch({
        type: ActionType.fetch_product,
        payload: data,
      });
    } catch (error:any) {
      console.log(error.message);
    }
 };

 export const getDetail = (id:string) => async (dispatch: Dispatch<Action>) => {
    try {     
      const { data } = await api.fetchDetails(id);
      dispatch({ type: ActionType.fetch_details, payload: data });

    } catch (error:any) {
      console.log(error.message);
    }
 }

 export const getCart = ()  => async (dispatch: Dispatch<Action>) => {
  try {
    const {data} = await api.fetchCart()
    dispatch({
      type: ActionType.fetch_cart,
      payload: data,
    })
  } catch (error:any) {
    console.log(error.message)
  }
 }

 export const postCart = (post:Product) => async (dispatch: Dispatch<Action>) => {
  try {
    const {data} = await api.createCart(post)
    dispatch({
      type: ActionType.add_cart,
      payload: data
    })
  } catch (error:any) {
    console.log(error.message)
  }
 }

export const deleteCart = (id:string) => async (dispatch: Dispatch<Action>) => {
  try {
    await api.delCart(id);
    dispatch({ type: ActionType.del_cart, payload: id });
  } catch (error) {
    console.log(error);
  }
}

export const increaseQty = (id:string) => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await api.incQty(id);
    dispatch({ type: ActionType.inc_qty, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const decreaseQty = (id:string) => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await api.decQty(id);
    dispatch({ type: ActionType.dec_qty, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const addToCart = () => async (dispatch:any, getState:any) => {
//   const {data} = await axios.get("/products/cart");

//   dispatch({
//     type: add_cart,
//     payload: {
//       _id: data._id,
//     title: data.title,
//     description: data.description,
//     imageOne: data.imageOne,
//     imageTwo: data.imageTwo,
//     imageThree: data.imageThree,
//     imageFour: data.imageFour,
//     price: data.price,
//     formerPrice: data.formerPrice,
//     categories: data.categories,
//     quantity: data.quantity,
//     tag: data.tag,
//     sizes: data.sizes
//     }
//   })
//   localStorage.setItem('cart', JSON.stringify(getState().products));
// }
// export const getProduct = (data: Product[]) => {
//   return {
//     type: fetch_product,
//     payload: data
//   }
// }

// export const getCart = (data: Product[]) => {
//   return {
//     type: fetch_cart,
//     payload: data
//   }
// }
// export const postCart = (data: Product[]) => {
//   return {
//     type: add_cart,
//     payload: data
//   }
// }