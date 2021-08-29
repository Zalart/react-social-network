import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from './AddPostForm/AddPostForm';

const MyPosts = ({posts, addPost}) => {

  const postsElements = posts.map(post => (<Post key={post.message} message={post.message} likes={post.likes} />));

  const handleAddPost = (values) => {
    addPost(values.newPost);
  }
    return (  
      <div className={styles.postsBlock}>
        <h2>MY POSTS</h2>
        <AddPostForm onSubmit={handleAddPost} />
      <div className={styles.posts}>
       <h4>New posts</h4> 
 
{postsElements}

      </div>
      </div>
    )
}
export default MyPosts;