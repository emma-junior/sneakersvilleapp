import { ActionType } from "./actionTypes";
import { CurrentUser } from "../../model";

export const loginStart = ( ) => {
    return {
        type: ActionType.login_start,
    }
}

export const loginSuccess = (user:CurrentUser) => {
    return {
        type: ActionType.login_success,
        payload: user
    }
}

export const loginFailure = () => {
    return {
        type: ActionType.login_failure
    }
}

export const logOut = () => {
    return {
        type: ActionType.log_out
    }
}

