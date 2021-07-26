export const ADD_POST = 'ADD-POST';
export const CHANGE_POST = 'CHANGE-POST';

let initialState =  { 
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
  let stateCopy = {...state}
  
    switch (action.type) {
        case ADD_POST: 
        const newPost = {
          id: state.posts.length + 1, 
          likes: 0, 
          message: state.postMessage
        }
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.postMessage = '';
        return stateCopy;
      
        case CHANGE_POST: 
        stateCopy.postMessage = action.post;
        return stateCopy;
        
        default:
          return state;
        
}

}