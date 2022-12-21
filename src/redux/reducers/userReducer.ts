import { ActionType } from "../actions/actionTypes";
import { User } from "../../model";
import { AnyAction } from 'redux'

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}

const userReducer = (state:User = initialState, action:AnyAction) => {
    
    switch (action.type) {
        case ActionType.login_start:
            return {...state, isFetching: true }
        case ActionType.login_success:
            return {...state, isFetching:false, currentUser: action.payload }
        case ActionType.login_failure:
            return {...state, isFetching: false, error:true }
        case ActionType.log_out:
            return {...state, currentUser: null}  
        default:
            return state;
    }
}

export default userReducer