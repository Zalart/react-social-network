import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts}) => {
  console.log('here', posts)
  const postsElements = posts.map(post => (<Post message={post.message} likes={post.likes} />))
    return (  
      <div className={styles.postsBlock}>
        <h2>MY POSTS</h2>
        <div>
          <div><textarea></textarea></div>
          <button>Add post</button>
        <button>Remove</button></div>
      
      <div className={styles.posts}>
       <h4>New posts</h4> 
 
{postsElements}

      </div>
      </div>
    )
}
export default MyPosts;