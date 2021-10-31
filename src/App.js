import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CoffeeDetails from './components/CoffeeDetails';
import RestaurantDetails from './components/RestaurantDetails';
import Emergency from './components/Emergency';
import Contacts from './components/Contacts';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <div>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/emergency">
              <Emergency />
            </Route>
            <Route path="/shop/coffee">
              <CoffeeDetails />
            </Route>
            <Route path="/shop/restaurant">
              <RestaurantDetails />
            </Route>
            <Navbar />
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/search/:type">
              <Search />
            </Route>
            <Navbar />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
