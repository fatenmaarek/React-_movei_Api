import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './MovieDetails.css'; 

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=08435d7890fc0b66e05d90f2fe18b3bc`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MovieDetailsContainer ">

      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <div className="MovieDetailsContent ">
        <h2>{movieDetails.title}</h2>
        <hr/>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
