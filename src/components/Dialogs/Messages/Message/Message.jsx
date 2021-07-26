import styles from "./Message.module.css";

const Message = ({type, message}) => {
    
    return (
<div className={styles.message + ' ' + styles[type]}>{message}</div>
    )
}

export default Message;