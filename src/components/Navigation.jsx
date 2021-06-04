import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
<nav className={classes.navigation}>
<ul>
  <li><a className={classes.item} href="#">Profile</a></li>
  <li><a className={classes.item} href="#">Messages</a></li>
  <li><a className={classes.item} href="#">Music</a></li>
  <li><a className={classes.item} href="#">News</a></li>
  <li><a className={classes.item} href="#">Settings</a></li>

</ul>
   </nav>
    )
}
export default Navigation;