import React from 'react';
import styles from "./MessageInputField.module.css";



const MessageInputField = ({currentMessage, handleAddMessage, handleChangeMessage})=> {


const onAddMessage = () => {
    handleAddMessage();
}

const onChangeMessage = (e) => {

    handleChangeMessage(e.target.value);
}

    return (
        <>
        <div className={styles.addMessage}>
        <textarea placeholder="type here"  onChange={onChangeMessage} value={currentMessage}></textarea>
        
    </div>
    <div className={styles.buttonWrapper}><button onClick={onAddMessage}>Send message</button></div>
    </>
    )
}

export default MessageInputField;