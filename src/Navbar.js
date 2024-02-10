import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const { favoriteCount = 0, lastAction = null } = useSelector((state) => state);

  return (
<nav className="navbar navbar-expand-lg m-0">
      <div className="container-fluid bg-dark border-bottom m-0 border-dark-subtle">
      
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Button className="nav-item  bg-danger ms-3 border-0">
              <Link className="nav-link" to="/Api">
                Api
              </Link>
            </Button>

            <Button className="nav-item ms-3 border-0">
              <Link className="nav-link" to="/TodoPage">
                Todo Page
              </Link>
            </Button>
          </ul>
          <div className="navbar ">
            <Link className="nav-link danger ms-3 border-0" to="/FavoritesPage">
              <Button id="favoriteCount">{favoriteCount}Favorites</Button> 
            </Link>
          </div>


          <Button className="navbar float-end bg-danger ms-3 border-0">
            <Link className="nav-link" to="/Login">
         Login
            </Link>
          </Button>

          <Button className="navbar float-end ms-3 bg-danger ms-3 border-0">
            <Link className="nav-link" to="/RegisterPage">
            Sign up
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
