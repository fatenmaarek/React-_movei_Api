import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyCard from './MyCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './Action.js';
import MyButtons from './MyButtons.js';
import './Api.css'; 

function ListMovies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20); 
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=08435d7890fc0b66e05d90f2fe18b3bc')
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movie-list-containerFluid bg-dark">
      <h1 className="text-primary text-center">Movies</h1>
      <div className="movie-row">
        {currentMovies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MyCard img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} path={movie.id} />
            </Link>
            
            {isFavorite(movie.id) ? (
              <MyButtons onClick={() => handleRemoveFavorite(movie.id)} action=" ❤️" />
            ) : (
              <MyButtons onClick={() => dispatch(addToFavorites(movie))} action="  🤍" />
            )}
          </div>
        ))}
      </div>
   
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, index) => (
            <li key={index} className="page-item">
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ListMovies;
