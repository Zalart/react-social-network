import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts, currentPost, dispatch}) => {

  const postsElements = posts.map(post => (<Post key={post.message} message={post.message} likes={post.likes} />));

  let newPostElement = React.createRef();

  const handleAddPost = () => {
    dispatch({type: 'ADD-POST'});
 
  }
  const handleChangePost = () => {
    dispatch({type: 'CHANGE-POST', post: newPostElement.current.value});
  }
    return (  
      <div className={styles.postsBlock}>
        <h2>MY POSTS</h2>
        <div>
          <div><textarea ref={newPostElement} onChange={handleChangePost} value={currentPost}></textarea></div>
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