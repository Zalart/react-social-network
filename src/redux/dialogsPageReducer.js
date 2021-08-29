export const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (newMessage)=> {
  const direction = Math.random() >= 0.5 ? 'out' : 'in';
 return {type: ADD_MESSAGE, direction, newMessage}

}

const initialState = {
    
  messages: [
    {id: 1, message: 'Hello, Test content', type: 'in'},
    {id: 2, message: 'Do you feel good?', type: 'out'},
    {id: 3, message: 'I\'m okay', type: 'in'}
  ],
  users: [
    {id: 1, name: 'Artur', photo: 'https://randomuser.me/api/portraits/men/61.jpg' },
    {id: 2, name: 'Ivan', photo: 'https://randomuser.me/api/portraits/women/89.jpg' },
    {id: 3, name: 'Piotr', photo: 'https://randomuser.me/api/portraits/women/47.jpg' },
    {id: 4, name: 'Eva', photo: 'https://randomuser.me/api/portraits/women/65.jpg' },
    {id: 5, name: 'Eugene', photo: 'https://randomuser.me/api/portraits/men/57.jpg' }
  ]

};
export const dialogsPageReducer = (state = initialState, action) => {

  
    switch (action.type) {
          case ADD_MESSAGE: 
/*           if(state.currentMessage !== '')  { */
          const newMessage = {
            id: state.messages.length + 1, message: action.newMessage, type: action.direction
          }
        
          return {
            ...state,
            messages: [...state.messages, newMessage]
          } 
/*         } else {
          return state
        } */
      
        default:
          return state;
      }
    

}