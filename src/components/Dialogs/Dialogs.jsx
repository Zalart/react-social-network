import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    
    const dialogs = [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Piotr'},
        {id: 4, name: 'Eva'},
        {id: 5, name: 'Volha'}
    ];
    const dialogsElements = dialogs.map(dialog=> <Dialog name={dialog.name} id={dialog.id} />);

    const messages = [
        {id: 1, message: 'Hello, Test content'},
        {id: 2, message: 'Do you feel good?'},
        {id: 3, message: 'I\'m okay'}
    ];
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