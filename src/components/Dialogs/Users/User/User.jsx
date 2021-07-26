import {NavLink} from "react-router-dom";
import styles from "./User.module.css";
const User = ({id, name, photo}) => {
    return (

    
                    <NavLink to={`/dialogs/${id}`} activeClassName={styles.active} className={styles.user}><img src={photo} alt={name} />{name}</NavLink>
                    
    )
}

export default User;