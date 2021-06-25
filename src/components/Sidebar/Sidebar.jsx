import styles from "./Sidebar.module.css";
import Navigation from "./Navigation/Navigation";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
const Sidebar = (props) => {
    return (
<div className={styles.sidebar}>
<Navigation />
<FriendsBlock friendsBlock={props.friendsBlock} />
   </div>
    )
}
export default Sidebar;