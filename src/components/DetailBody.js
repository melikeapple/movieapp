import React, { useEffect, useMemo } from "react";

import MovieDetailPoster from "../partials/content/MovieDetailPoster";
import MovieDetailDesc from "../partials/content/MovieDetailDesc";
import DetailCast from "./DetailCast";
import { shallowEqual, useSelector } from "react-redux";

const DetailBody = () => {
  const { movie_detail } = useSelector(
    ({ movie_detail }) => ({ movie_detail }),
    shallowEqual
  );

  return (
    <div className="row detail-wrapper h-100">
      <MovieDetailPoster data={movie_detail} />
      <MovieDetailDesc data={movie_detail} />
      <DetailCast data={movie_detail} />
    </div>
  );
};
export default DetailBody;
