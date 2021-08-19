import { combineReducers, createStore, applyMiddleware } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { friendsBlockReducer } from "./friendsBlockReducer";
import { membersPageReducer } from "./membersPageReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducersBatch = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsBlock: friendsBlockReducer,
    membersPage: membersPageReducer,
    auth: authReducer,
    form: formReducer

});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;