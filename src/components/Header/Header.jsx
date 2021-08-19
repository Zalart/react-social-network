import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
    return (
        <header className={styles.header}>
            
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png" />
            <div className={styles.loginBlock}>
                {props.isAuthorised ? <><div className={styles.userName}>{props.login}{props.fullName}</div><div><NavLink to="/" onClick={props.logOutProcess}>LOGOUT</NavLink></div></> : <NavLink to="/login">LOGIN </NavLink>}
                </div>
   </header>
    )
}
export default Header;