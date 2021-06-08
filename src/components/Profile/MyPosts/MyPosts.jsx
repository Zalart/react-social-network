import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (  
      <div>MY POSTS
        <div><textarea></textarea><button>Add post</button>
        <button>Remove</button></div>
      
      <div className={styles.posts}>
       <h4>New posts</h4> 
       
<Post message="Hi, how are you?" likes="2"/>
<Post message="It's my first post" likes="100"/>
<Post message="New message from props" likes="0"/>

      </div>
      </div>
    )
}
export default MyPosts;