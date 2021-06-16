import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = ({state}) => {
    

    const dialogsElements = state.dialogs.map(d=> <Dialog name={d.name} id={d.id} photo={d.photo}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message} type={m.type}/>)

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