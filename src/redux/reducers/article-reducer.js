import * as actionTypes from "../actions/action-types";
import initialState from "./initial-state";

export default function articleReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOAD_ARTICLES_SUCCESS:
            return action.articles;
        default:
            return state;
    }
}