import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useDispatch } from "react-redux";
import { actions } from "../../store/ducks/movie.trailers.duck";

const MovieDetailVideos = ({ id, data }) => {
  const [toggler, setToggler] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.movieTrailerRequest(id));
    return () => {
      dispatch(actions.movieTrailerRequest());
    };
  }, [id]);

  return (
    <>
      <div className="video-section">
        <div
          style={{ cursor: "pointer" }}
          className="position-relative"
          onClick={() => setToggler(!toggler)}
        >
          <div className="video-wrapper text-light pb-3">Videos</div>
          <PlayArrowIcon className="video-wrapper-icon  text-light" />
          <div>
            <img
              className="w-100"
              src={
                data.entity && data.entity.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${data.entity.backdrop_path}`
                  : "https://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
              }
              alt="{data.entity.original_title}"
            />
            <div className="text-light py-4">
              See all videos <DoubleArrowIcon className="text-sm" />
              {data.entity &&
                data.entity.videos &&
                data.entity.videos.results.length > 0 &&
                _.take(data.entity.videos.results, 1).map((d, i) => (
                  <FsLightbox
                    key={i}
                    toggler={toggler}
                    sources={[`https://www.youtube.com/watch?v=${d.key}`]}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetailVideos;
