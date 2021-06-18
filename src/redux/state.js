import {rerenderEntireTree} from './../render';
export const state = {
  profilePage: {
    posts: [
      {id: 1, likes: 20, message: 'Hi, how are you?'},
      {id: 2, likes: 100, message: 'It\'s my first post'},
      {id: 3, likes: 0, message: 'New message from props'}
    ]
  },
 dialogsPage: {
    messages: [
      {id: 1, message: 'Hello, Test content', type: 'in'},
      {id: 2, message: 'Do you feel good?', type: 'out'},
      {id: 3, message: 'I\'m okay', type: 'in'}
    ],
    dialogs: [
      {id: 1, name: 'Artur', photo: 'https://randomuser.me/api/portraits/men/61.jpg' },
      {id: 2, name: 'Ivan', photo: 'https://randomuser.me/api/portraits/women/89.jpg' },
      {id: 3, name: 'Piotr', photo: 'https://randomuser.me/api/portraits/women/47.jpg' },
      {id: 4, name: 'Eva', photo: 'https://randomuser.me/api/portraits/women/65.jpg' },
      {id: 5, name: 'Eugene', photo: 'https://randomuser.me/api/portraits/men/57.jpg' }
    ]
  },
  friendsBlock: {
  friends: [
    {id: 1, name: 'Viktor', photo: 'https://randomuser.me/api/portraits/women/28.jpg'},
    {id: 2, name: 'Alex', photo: 'https://randomuser.me/api/portraits/men/73.jpg'},
    {id: 3, name: 'Olga', photo: 'https://randomuser.me/api/portraits/women/16.jpg'},
    {id: 4, name: 'Arnold', photo: 'https://randomuser.me/api/portraits/men/78.jpg'}
  ]
  }

}

export const addPost = (post) => {
  const newPost = {
    id: state.profilePage.posts.length + 1, 
    likes: 0, 
    message: post
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
  
}