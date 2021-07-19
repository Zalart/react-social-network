import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../redux/profilePageReducer'


const MyPostsContainer = ({store}) => {

  const state = store.getState();
  const addPost = () => {
    store.dispatch(addPostActionCreator());
 
  }
  const updateNewPostText = (text) => {
    let action = changeNewPostTextActionCreator(text);
    store.dispatch(action);
  }
    return (<MyPosts posts={state.profilePage.posts} 
    currentPost={state.profilePage.postMessage} 
    addPost={addPost} 
    updateNewPostText={updateNewPostText} />)
  }
export default MyPostsContainer;