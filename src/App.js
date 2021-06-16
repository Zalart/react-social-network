import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = ({state}) => {
  const {dialogsPage, profilePage, friendsBlock} = state;
  return (<div className="app-wrapper">
    <BrowserRouter>
   <Header />
   <Sidebar state={friendsBlock} />
   <div className="app-wrapper-content">
     
     <Route path="/dialogs" ><Dialogs state={dialogsPage}  /></Route>
     <Route path="/profile"><Profile state={profilePage} /> </Route>
     <Route path="/music" component={Music} />
     <Route path="/news" component={News} />
     <Route path="/settings" component={Settings} />
     
   </div>
   </BrowserRouter>
    </div>
    
  );
}



export default App;
