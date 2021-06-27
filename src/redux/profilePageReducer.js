export const ADD_POST = 'ADD-POST';
export const CHANGE_POST = 'CHANGE-POST';

export const profilePageReducer = (state, action) => {
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
          debugger;
          state.postMessage = action.post;
          break;
          default:
            break;
}
return state;
}