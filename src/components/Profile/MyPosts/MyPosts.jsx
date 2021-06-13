import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const posts = [
    {id: 1, likes: 2, message: 'Hi, how are you?'},
    {id: 2, likes: 100, message: 'It\'s my first post'},
    {id: 3, likes: 0, message: 'New message from props'}
  ];
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