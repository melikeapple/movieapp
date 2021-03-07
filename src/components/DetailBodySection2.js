import React from "react";
import MovieDetailVideos from "../partials/content/MovieDetailVideos";
import { shallowEqual, useSelector } from "react-redux";
import MovieDetailPhotos from "../partials/content/MovieDetailPhotos";

const DetailBodySection2 = ({ query }) => {
  const { movie_trailer } = useSelector(
    ({ movie_trailer }) => ({ movie_trailer }),
    shallowEqual
  );
  return (
    <>
      <MovieDetailVideos id={query} data={movie_trailer} />
      <MovieDetailPhotos data={movie_trailer} />
    </>
  );
};
export default DetailBodySection2;
