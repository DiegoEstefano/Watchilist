import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.id === movie.id)
  let storedMovieWatched = watched.find(o => o.id === movie.id)

  const watchlistDisable = storedMovie
    ? true
    : storedMovieWatched
      ? true
      : false;

  const watchedDisable = storedMovieWatched ? true : false;  

  return (
    <div className='result-card'>
      <div className='poster.wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>{movie.release_date ? movie.release_date.substring(0, 4) : ' Indisponível '}</h4>
        </div>

        <div className='controls'>
          <button className='btn'
            disabled={watchlistDisable}
            onClick={() => addMovieToWatchlist(movie)}> Quero Assistir </button>

          <button className='btn'
            disabled={watchedDisable}
            onClick={() => addMovieToWatched(movie)}> Já assisti</button>
        </div>




      </div>
    </div>
  )
}
