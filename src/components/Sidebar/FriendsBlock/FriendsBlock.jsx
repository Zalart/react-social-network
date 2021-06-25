import styles from "./FriendsBlock.module.css";
import Friend from "./Friend/Friend";


const FriendsBlock = ({friendsBlock}) => {
  const myFriends = friendsBlock.friends.map(f=> <Friend key={f.name} name={f.name} photo={f.photo} />);
    return (
      <>
      <div className={styles.title}>Friends</div>
<div className={styles.friends}>
  
{myFriends}
   </div>
   </>
    )
}
export default FriendsBlock;