import React from 'react';
import styles from "./MessageInputField.module.css";



const MessageInputField = ({dialogsPage, addMessage, changeMessage})=> {

const messageText = React.createRef();

const handleAddMessage = () => {
    if(dialogsPage.currentMessage !== '')  {
        debugger;
        addMessage('out');
    }
}

const handleChangeMessage = () => {
    changeMessage(messageText.current.value);
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