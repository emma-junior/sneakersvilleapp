import { publicRequest } from "../api";
import { loginFailure, loginStart, loginSuccess } from "./actions/user";
import { AppDispatch } from "./store";

type LoginFormData = {
  username: string
  password: string
}


export const login = async (dispatch:AppDispatch, user:LoginFormData) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error:any) {
    dispatch(loginFailure());
    console.log(error.message)
  }
};