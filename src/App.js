import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = ({state, store}) => {

  return (<div className="app-wrapper">
    <BrowserRouter>
   <Header />
   <Sidebar friendsBlock={state.friendsBlock} />
   <div className="app-wrapper-content">
     
     <Route path="/dialogs" ><Dialogs dialogsPage={state.dialogsPage} addMessage={store.addMessage.bind(store)} changeMessage={store.changeMessage.bind(store)} /></Route>
     <Route path="/profile"><Profile profilePage={state.profilePage} addPost={store.addPost.bind(store)} changePost={store.changePost.bind(store)} /> </Route>
     <Route path="/music" component={Music} />
     <Route path="/news" component={News} />
     <Route path="/settings" component={Settings} />
     
   </div>
   </BrowserRouter>
    </div>
    
  );
}

export default App;
