import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  {id: 1, name: 'Artur'},
  {id: 2, name: 'Ivan'},
  {id: 3, name: 'Piotr'},
  {id: 4, name: 'Eva'},
  {id: 5, name: 'Volha'}
];

const messages = [
  {id: 1, message: 'Hello, Test content'},
  {id: 2, message: 'Do you feel good?'},
  {id: 3, message: 'I\'m okay'}
];
const posts = [
  {id: 1, likes: 20, message: 'Hi, how are you?'},
  {id: 2, likes: 100, message: 'It\'s my first post'},
  {id: 3, likes: 0, message: 'New message from props'}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs ={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
