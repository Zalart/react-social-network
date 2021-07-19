export const ADD_POST = 'ADD-POST';
export const CHANGE_POST = 'CHANGE-POST';

const initialState =  { 
  posts: [
  {id: 1, likes: 20, message: 'Hi, how are you?'},
  {id: 2, likes: 100, message: 'It\'s my first post'},
  {id: 3, likes: 0, message: 'New message from props'}
],
postMessage: ''
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostTextActionCreator = (post) => ({type: CHANGE_POST, post: post});


export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
        const newPost = {
          id: state.posts.length + 1, 
          likes: 0, 
          message: state.postMessage
        }
        state.posts.push(newPost);
        state.postMessage = '';
        break;
      
          case CHANGE_POST: 
          state.postMessage = action.post;
          break;
          default:
            break;
}
return state;
}