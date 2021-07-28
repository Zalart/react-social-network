import MyPosts from './MyPosts';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../redux/profilePageReducer';
import { connect } from 'react-redux';

  let mapStateToProps = (state) => {

    return {
      posts: state.profilePage.posts,
      currentPost: state.profilePage.postMessage
    }
  }

  let mapDispatchToProps = (dispatch) => {
   
    return {
      addPost: () => {
        dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
  
          dispatch(changeNewPostTextActionCreator(text));
          
      }

    }
  }

  const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;