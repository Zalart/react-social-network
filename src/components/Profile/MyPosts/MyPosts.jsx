import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts, addPost}) => {

  const postsElements = posts.map(post => (<Post key={post.message} message={post.message} likes={post.likes} />));

  let newPostElement = React.createRef();

  const handleAddPost = () => {
    let postMessage = newPostElement.current.value;
    addPost(postMessage);
    newPostElement.current.value = '';   
  
  }
    return (  
      <div className={styles.postsBlock}>
        <h2>MY POSTS</h2>
        <div>
          <div><textarea ref={newPostElement}></textarea></div>
          <button onClick={handleAddPost}>Add post</button>
        <button>Remove</button></div>
      
      <div className={styles.posts}>
       <h4>New posts</h4> 
 
{postsElements}

      </div>
      </div>
    )
}
export default MyPosts;