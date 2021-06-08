import classes from "./Navigation.module.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
<nav className={classes.navigation}>
<ul>
  <li><Link className={classes.item} to="/profile">Profile</Link></li>
  <li><Link className={classes.item} to="/dialogs">Messages</Link></li>
  <li><Link className={classes.item} to="/music">Music</Link></li>
  <li><Link className={classes.item} to="/news">News</Link></li>
  <li><Link className={classes.item} to="/settings">Settings</Link></li>

</ul>
   </nav>
    )
}
export default Navigation;