import {NavLink} from "react-router-dom";
import styles from "./Dialog.module.css";
const Dialog = (props) => {
    return (
<div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
                    </div>
    )
}

export default Dialog;