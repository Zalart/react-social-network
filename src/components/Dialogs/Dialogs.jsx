import styles from "./Dialogs.module.css";
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>Artur</div>
                <div className={styles.dialog}>Maxim</div>
                <div className={styles.dialog}>Maya</div>
                <div className={styles.dialog}>Volha</div>
            </div>
        <div className={styles.messages}>
            <div className={styles.message}>Hi</div>
            <div className={styles.message}>Hello, how are you?</div>
            <div className={styles.message}>Do you feel good?</div>
        </div>
        </div>
    )
}
export default Dialogs;  