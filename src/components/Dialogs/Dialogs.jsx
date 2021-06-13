import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = ({dialogs, messages}) => {
    

    const dialogsElements = dialogs.map(dialog=> <Dialog name={dialog.name} id={dialog.id} />);
    const messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               { dialogsElements }
                                           </div>
        <div className={styles.messages}>
            { messagesElements }

        </div>
        </div>
    )
}
export default Dialogs;  