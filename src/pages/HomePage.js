import React, { useEffect } from "react";
import MoviesCarousel from "../components/MoviesCarousel";
import { useDispatch, useSelector } from "react-redux";
import { actions as popularMovieActions } from "../store/ducks/popular.movie.duck";
import { actions as trendMovieActions } from "../store/ducks/trend.movie.duck";
import { actions as upComingMovieActions } from "../store/ducks/upcoming.movie.duck";

const HomePage = () => {
  const dispatch = useDispatch();
  const { popular_movies, trend_movies, upcoming_movies } = useSelector(
    ({ popular_movies, trend_movies, upcoming_movies }) => ({
      popular_movies,
      trend_movies,
      upcoming_movies,
    })
  );

  useEffect(() => {
    dispatch(popularMovieActions.popularMovieRequest());
    dispatch(trendMovieActions.trendMovieRequest());
    dispatch(upComingMovieActions.upComingMovieRequest());
    return () => {
      dispatch(popularMovieActions.popularMovieResetStore());
      dispatch(trendMovieActions.trendMovieResetStore());
      dispatch(upComingMovieActions.upComingMovieResetStore());
    };
  }, []);

  return (
    <div>
      {/*<SearchResult />*/}
      <MoviesCarousel data={popular_movies} title="Popular Movies" />
      <MoviesCarousel data={trend_movies} title="Trend Movies" />
      <MoviesCarousel data={upcoming_movies} title="Upcoming Movies" />
    </div>
  );
};

export default HomePage;
