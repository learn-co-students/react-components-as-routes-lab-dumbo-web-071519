import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=>{
        return <div>
          <h2>{movie.title}</h2>
          <span>Time:{movie.time}</span><br/><br/>
          Genres:<br/>
          {movie.genres.map(genre=>{return <li>{genre}</li>})}
        </div>
      })}
    </div>
  );
};

export default Movies;
