import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (  
      <div>MY POSTS
        <div><textarea></textarea><button>Add post</button>
        <button>Remove</button></div>
      
      <div className={styles.posts}>
       <h4>New posts</h4> 
       
<Post />
<Post />
<Post />

      </div>
      </div>
    )
}
export default MyPosts;