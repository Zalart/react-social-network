import React from 'react';
import styles from "./MessageInputField.module.css";
import { addMessageActionCreator, changeNewMessageActionCreator } from '../../../../redux/dialogsPageReducer';


const MessageInputField = ({dialogsPage, dispatch})=> {


const handleAddMessage = () => {
    if(dialogsPage.currentMessage !== '')  {
        
        dispatch(addMessageActionCreator());
    }
}

const handleChangeMessage = (e) => {

    dispatch(changeNewMessageActionCreator(e.target.value));
}

    return (
        <>
        <div className={styles.addMessage}>
        <textarea placeholder="type here"  onChange={handleChangeMessage} value={dialogsPage.currentMessage}></textarea>
        
    </div>
    <div className={styles.buttonWrapper}><button onClick={handleAddMessage}>Send message</button></div>
    </>
    )
}

export default MessageInputField;