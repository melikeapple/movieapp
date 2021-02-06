import React, { useEffect } from "react";
import MoviesCarousel from "../components/MoviesCarousel";
import { useDispatch, useSelector } from "react-redux";
import { actions as popularMovieActions } from "../store/ducks/popular.movie.duck";
import { actions as trendMovieActions } from "../store/ducks/trend.movie.duck";

const HomePage = () => {
  const dispatch = useDispatch();
  const { popular_movies, trend_movies } = useSelector(
    ({ popular_movies, trend_movies }) => ({
      popular_movies,
      trend_movies,
    })
  );

  useEffect(() => {
    dispatch(popularMovieActions.popularMovieRequest());
    dispatch(trendMovieActions.trendMovieRequest());
  }, []);

  return (
    <div>
      {/*<SearchResult />*/}
      <MoviesCarousel data={popular_movies} title="Popular Movies" />
      <MoviesCarousel data={trend_movies} title="Trend Movies" />
    </div>
  );
};

export default HomePage;
