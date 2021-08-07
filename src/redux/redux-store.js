import { combineReducers, createStore, applyMiddleware } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { friendsBlockReducer } from "./friendsBlockReducer";
import { membersPageReducer } from "./membersPageReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";
let reducersBatch = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsBlock: friendsBlockReducer,
    membersPage: membersPageReducer,
    auth: authReducer

});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;