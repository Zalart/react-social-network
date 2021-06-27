export const ADD_MESSAGE = 'ADD-MESSAGE';
export const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

export const dialogsPageReducer = (state, action) => {
    switch (action.type) {
          case ADD_MESSAGE: 
          const newMessage = {
            id: state.messages.length + 1, message: state.currentMessage, type: action.direction
          }
          state.messages.push(newMessage);
          state.currentMessage = '';
          break;
      
            case CHANGE_MESSAGE: 
            state.currentMessage = action.message;
            break;
      
        default:
          break;
      }
    return state;

}