import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import MovieDetailPoster from "../partials/content/MovieDetailPoster";
import MovieDetailDesc from "../partials/content/MovieDetailDesc";
import MovieDetailCast from "../partials/content/MovieDetailCast";
import PeopleLikeMovie from "../partials/content/PeopleLikeMovie";
import MovieDetailStory from "../partials/content/MovieDetailStory";

const DetailBody = () => {
  const { movie_detail } = useSelector(
    ({ movie_detail }) => ({ movie_detail }),
    shallowEqual
  );

  return (
    <div className="row detail-wrapper h-100">
      <MovieDetailPoster data={movie_detail} />
      <MovieDetailDesc data={movie_detail} />
      <MovieDetailCast data={movie_detail} />
      <PeopleLikeMovie />
      <MovieDetailStory />
    </div>
  );
};
export default DetailBody;
