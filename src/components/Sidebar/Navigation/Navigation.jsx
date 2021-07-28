import styles from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
<nav className={styles.navigation}>
<ul>
  <li><NavLink className={styles.item} activeClassName={styles.active} to="/profile">Profile</NavLink></li>
  <li><NavLink className={styles.item} activeClassName={styles.active} to="/dialogs">Messages</NavLink></li>
  <li><NavLink className={styles.item} activeClassName={styles.active} to="/music">Music</NavLink></li>
  <li><NavLink className={styles.item} activeClassName={styles.active} to="/news">News</NavLink></li>
  <li><NavLink className={styles.item} activeClassName={styles.active} to="/settings">Settings</NavLink></li>

</ul>
<ul>
<li><NavLink className={styles.item} activeClassName={styles.active} to="/members">Members</NavLink></li>
</ul>
   </nav>
    )
}
export default Navigation;