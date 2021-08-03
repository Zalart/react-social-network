import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MembersContainer from './components/Members/MembersContainer';
import store from './redux/redux-store';


const App = () => {

  return (<div className="app-wrapper">
    <BrowserRouter>
   <Header />
   <Sidebar friendsBlock={store.getState().friendsBlock} />
   <div className="app-wrapper-content">
     
     <Route path="/dialogs" ><Dialogs /></Route>
     <Route path="/profile/:userId?"><ProfileContainer /> </Route>
     <Route path="/members"><MembersContainer /></Route>
     <Route path="/music" component={Music} />
     <Route path="/news" component={News} />
     <Route path="/settings" component={Settings} />
     
   </div>
   </BrowserRouter>
    </div>
    
  );
}

export default App;
