import { combineReducers, createStore } from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { friendsBlockReducer } from "./friendsBlockReducer";
import { membersPageReducer } from "./membersPageReducer";
let reducersBatch = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsBlock: friendsBlockReducer,
    membersPage: membersPageReducer

});

let store = createStore(reducersBatch);

window.store = store;

export default store;