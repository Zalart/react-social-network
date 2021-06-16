import styles from "./Friend.module.css";


const Friend = ({name, photo}) => {
    return (
<div className={styles.friend}>
<img src={photo} alt={name} />
<div className={styles.friendName}>{name}</div>
   </div>
    )
}
export default Friend;