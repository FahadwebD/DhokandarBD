import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Registar/Register';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          
          <Home></Home>

        </Route>
        <Route exact path='/home'>
          
          <Home></Home>

        </Route>
        <Route exact path='/sign'>
          
         <SignIn></SignIn>

        </Route>
        <Route exact path='/reg'>
        <Register></Register>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
