import React from 'react';
import styles from "./MessageInputField.module.css";



const MessageInputField = ({dialogsPage, dispatch})=> {

const messageText = React.createRef();

const handleAddMessage = () => {
    const direction = Math.random() >= 0.5 ? 'out' : 'in';
    if(dialogsPage.currentMessage !== '')  {
        
        dispatch({type: 'ADD-MESSAGE', direction: direction});
    }
}

const handleChangeMessage = () => {
    dispatch({type: 'CHANGE-MESSAGE', message: messageText.current.value});
}

    return (
        <>
        <div className={styles.addMessage}>
        <textarea placeholder="type here" ref={messageText} onChange={handleChangeMessage} value={dialogsPage.currentMessage}></textarea>
        
    </div>
    <div className={styles.buttonWrapper}><button onClick={handleAddMessage}>Send message</button></div>
    </>
    )
}

export default MessageInputField;