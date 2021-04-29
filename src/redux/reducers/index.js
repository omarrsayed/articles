import { combineReducers } from 'redux';
import articles from './article-reducer';
import users from "./user-reducer";

const rootReducer = combineReducers({
    articles,
    users
});

export default rootReducer;