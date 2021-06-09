import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <Dialog name="Artur" id="1" />
                <Dialog name="Ivan" id="2" />
                <Dialog name="Piotr" id="3" />
                <Dialog name="Eva" id="4" />
                <Dialog name="Volha" id="5" />

                            </div>
        <div className={styles.messages}>
            
            <Message message="Hello, Test content" />
            <Message message="Do you feel good?" />
            <Message message="I'm okay" />

        </div>
        </div>
    )
}
export default Dialogs;  