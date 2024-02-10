import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import NotFound from './NotFound.js';
import MovieDetails from "./MovieDetails.js";
import FavoritesPage from "./FavoritesPage.js"; 
import Login from './Login.js'; 
import RegisterPage from './RegisterPage';
import TodoPage from './TodoPage.js';
import Api from './Api.js';
import { Provider } from 'react-redux';
import store from './Store.js'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Login"} component={Login} />
            <Route exact path={"/RegisterPage"} component={RegisterPage} />

            <Route exact path={"/TodoPage"} component={TodoPage} />
            <Route exact path={"/Api"} component={Api} />
            <Route exact path="/FavoritesPage" component={FavoritesPage} /> 
            <Route path="/movie/:movieId" component={MovieDetails} />
            <Route path={"*"} component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
