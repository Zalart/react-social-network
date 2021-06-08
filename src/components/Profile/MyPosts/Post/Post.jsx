import styles from "./Post.module.css";

const Post = (props) => {
    return (  
       <div className={styles.item}>
         <img src="https://randomuser.me/api/portraits/women/68.jpg" />
         {props.message}
       <div><span>likes: {props.likes}</span></div></div>
    )
}
export default Post;