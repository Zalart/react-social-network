import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = ({dialogs, posts, messages, }) => {
  return (<div className="app-wrapper">
    <BrowserRouter>
   <Header />
   <Navigation />
   <div className="app-wrapper-content">
     
     <Route path="/dialogs" ><Dialogs dialogs = {dialogs} messages = {messages} /></Route>
     <Route path="/profile"><Profile posts={posts} /> </Route>
     <Route path="/music" component={Music} />
     <Route path="/news" component={News} />
     <Route path="/settings" component={Settings} />
     
   </div>
   </BrowserRouter>
    </div>
    
  );
}



export default App;
