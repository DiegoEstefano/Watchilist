import { useState, useEffect } from "react";
import React from "react";
import { MovieCard } from "./MovieCard";

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
    console.log(topMovies);
  };

  useEffect(() => {
    const topRatedUrl = `https://api.themoviedb.org/3/movie/popular?api_key=83fdf13bef72de9ef0faa9892a749cca&language=pt-BR&page=1`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="text">
          <h1 className="heading">Top Movies</h1>
        </div>

        {topMovies.length > 0 ? (
          <div className="movie-grid">
            {topMovies.map(movie => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Sem filmes na tua lista, adicione algum!</h2>
        )}

      </div>
    </div>
  );
};
