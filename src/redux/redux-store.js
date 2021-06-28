import { combineReducers, createStore } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { friendsBlockReducer } from "./friendsBlockReducer";
let reducersBatch = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsBlock: friendsBlockReducer

});

let store = createStore(reducersBatch);

export default store;