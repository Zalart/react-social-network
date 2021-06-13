import styles from "./Post.module.css";

const Post = ({message, likes}) => {
    return (  
       <div className={styles.item}>
         <img src="https://randomuser.me/api/portraits/women/68.jpg" />
         {message}
       <div><span>likes: {likes}</span></div></div>
    )
}
export default Post;