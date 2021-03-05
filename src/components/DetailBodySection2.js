import React from "react";
import MovieDetailVideos from "../partials/content/MovieDetailVideos";
import { shallowEqual, useSelector } from "react-redux";

const DetailBodySection2 = ({ query }) => {
  const { movie_trailer, movie_photos } = useSelector(
    ({ movie_trailer, movie_photos }) => ({ movie_trailer, movie_photos }),
    shallowEqual
  );
  console.log("movie-photos:", movie_photos);
  return (
    <>
      <MovieDetailVideos id={query} data={movie_trailer} />
    </>
  );
};
export default DetailBodySection2;
