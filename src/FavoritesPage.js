import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from './Action.js';
import { Button } from 'react-bootstrap';
import './FavoritesPage.css';
const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="favorite-page">
      <h1>Favorite Movies</h1>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />



          <div>
      <h2>{movie.title}</h2>
    </div>

          <Button onClick={() => handleRemoveFavorite(movie.id)}>Remove from Favorites</Button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
