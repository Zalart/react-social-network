import {NavLink} from "react-router-dom";
import styles from "./Dialog.module.css";
const Dialog = ({id, name, photo}) => {
    return (

    
                    <NavLink to={`/dialogs/${id}`} activeClassName={styles.active} className={styles.dialog}><img src={photo} alt={name} />{name}</NavLink>
                    
    )
}

export default Dialog;