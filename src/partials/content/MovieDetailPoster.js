import React from "react";
import { Image } from "react-bootstrap";

const MovieDetailPoster = ({ data }) => {
  console.log("posterData:", data);
  console.log("posterimage:", data.entity);
  return (
    <>
      <div className="col-md-4">
        <div className="overflow-hidden pb-5">
          {data.entity && (
            <Image
              src={
                data.entity.poster_path
                  ? `https://image.tmdb.org/t/p/original/${data.entity.poster_path}`
                  : "https://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
              }
              alt=""
              className="detail-wrapper-poster "
            />
          )}
        </div>
      </div>
    </>
  );
};
export default MovieDetailPoster;
