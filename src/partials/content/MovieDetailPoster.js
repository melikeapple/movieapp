import React from "react";
import { Image } from "react-bootstrap";

const MovieDetailPoster = ({ data }) => {
  console.log("posterData:", data.entity);
  console.log("posterDataimage");
  return (
    <>
      <div className="col-md-4">
        <div className="overflow-hidden">
          {data.entity && (
            <Image
              src={`https://image.tmdb.org/t/p/original/${data.entity.poster_path}`}
              alt=""
              className="detail-wrapper-poster w-100"
            />
          )}
        </div>
      </div>
    </>
  );
};
export default MovieDetailPoster;
