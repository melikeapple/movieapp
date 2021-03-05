import React, { useEffect } from "react";
import { Section } from "./Section";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/ducks/movie.recommend.duck";

const PeopleLikeMovie = () => {
  const dispatch = useDispatch();
  const { query, recommended_movies } = useSelector(
    ({ router, recommended_movies }) => ({
      query: router.location.query,
      recommended_movies,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (query.id) {
      dispatch(actions.recommendedMovieRequest(query.id));
    }
    return () => {
      dispatch(actions.recommendedMovieResetStore());
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Section>
              <Section.Header />
              <Section.Body>
                <div className="text-dark text-md font-weight-bold pb-1 pt-7">
                  People also liked...
                </div>
                <div className="reccommend d-flex">
                  {recommended_movies.entity &&
                    recommended_movies.entity.results.length > 0 &&
                    _.take(recommended_movies.entity.results, 4).map(
                      (val, index) => (
                        <Link
                          to={`/detail?id=${val.id}`}
                          className=" w-100 pr-6"
                          key={index}
                        >
                          <img
                            className="reccommend-poster w-100"
                            src={
                              val.poster_path
                                ? `https://image.tmdb.org/t/p/original/${val.poster_path}`
                                : "https://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
                            }
                            alt=""
                          />
                        </Link>
                      )
                    )}
                </div>
              </Section.Body>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};
export default PeopleLikeMovie;
