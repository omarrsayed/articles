import * as actionTypes from "../actions/action-types";
import initialState from "./initial-state";

export default function userReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS || actionTypes.REGISTER_SUCCESS:
            return action.token;
        default:
            return state;
    }
}