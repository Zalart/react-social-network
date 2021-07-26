import React from 'react';
import styles from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import MessageInputFieldContainer from "./Messages/Message/MessageInputField/MessageInputFieldContainer";

const Dialogs = () => {
            return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                
               <UsersContainer />
                                           </div>
        <div>
        <div className={styles.messagesBoard}>
            <div className={styles.messages}>
            <MessagesContainer />
            </div>
        <MessageInputFieldContainer />

        </div>
        </div>
        </div>
        )
        
        
    
}
export default Dialogs;  