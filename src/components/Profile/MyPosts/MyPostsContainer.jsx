import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profilePageReducer';
import { connect } from 'react-redux';

  let mapStateToProps = (state) => {

    return {
      posts: state.profilePage.posts,
      currentPost: state.profilePage.postMessage
    }
  }

  let mapDispatchToProps = (dispatch) => {
   
    return {
      addPost: (value) => {
        dispatch(addPostActionCreator(value));
      }
    }
  }

  const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;