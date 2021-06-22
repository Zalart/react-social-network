import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {state, subscribe, addPost, changePost, addMessage, changeMessage} from './redux/state';
import './index.css';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} changePost={changePost} addMessage={addMessage} changeMessage={changeMessage} />
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

    rerenderEntireTree(state);

    subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
