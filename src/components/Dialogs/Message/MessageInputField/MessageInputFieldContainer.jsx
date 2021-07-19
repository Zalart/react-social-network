import React from 'react';
import styles from "./MessageInputField.module.css";
import MessageInputField from './MessageInputField';
import { addMessageActionCreator, changeNewMessageActionCreator } from '../../../../redux/dialogsPageReducer';


const MessageInputFieldContainer = ({store})=> {

const state = store.getState().dialogsPage;
const handleAddMessage = () => {
    if(state.currentMessage !== '')  {
        
        store.dispatch(addMessageActionCreator());
    }
}

const handleChangeMessage = (textFormValue) => {

    store.dispatch(changeNewMessageActionCreator(textFormValue));
}

    return (
    <MessageInputField currentMessage={state.currentMessage} handleAddMessage={handleAddMessage} handleChangeMessage={handleChangeMessage} />
    )
}

export default MessageInputFieldContainer;