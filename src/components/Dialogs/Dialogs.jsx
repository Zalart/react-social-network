import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = ({state}) => {
    

    const dialogsElements = state.dialogs.map(d=> <Dialog name={d.name} id={d.id} photo={d.photo}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message} type={m.type}/>);
    const messageText = React.createRef();
    const addMessage = () =>{
        alert(messageText.current.value);
    }

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
        <div className={styles.addMessage}>
            <textarea placeholder="type here" ref={messageText}></textarea>
            
        </div>

        </div>
        <div className={styles.buttonWrapper}><button onClick={addMessage}>Send message</button></div>
        </div>
        

        </div>
    )
}
export default Dialogs;  