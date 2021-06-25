import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageInputField from "./Message/MessageInputField/MessageInputField";


const Dialogs = ({dialogsPage, dispatch}) => {
    

    const dialogsElements = dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} photo={d.photo}/>);
    const messagesElements = dialogsPage.messages.map(m => <Message message={m.message} type={m.type}/>);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               { dialogsElements }
                                           </div>
        <div>
        <div className={styles.messagesBoard}>
            <div className={styles.messages}>
            { messagesElements }
            </div>
        <MessageInputField dialogsPage={dialogsPage} dispatch={dispatch} />

        </div>
        
        </div>
        

        </div>
    )
}
export default Dialogs;  