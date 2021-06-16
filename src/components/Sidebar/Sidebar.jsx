import styles from "./Sidebar.module.css";
import Navigation from "./Navigation/Navigation";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
const Sidebar = ({state}) => {
    return (
<div className={styles.sidebar}>
<Navigation />
<FriendsBlock friends={state.friends} />
   </div>
    )
}
export default Sidebar;