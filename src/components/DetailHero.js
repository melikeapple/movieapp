import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import moment from "moment";
import { Container, Row, Col, Image } from "react-bootstrap";
import StarIcon from "@material-ui/icons/Star";

const DetailHero = () => {
  const { movie_detail } = useSelector(
    ({ movie_detail }) => ({ movie_detail }),
    shallowEqual
  );
  return (
    <div className="hero-wrapper">
      {movie_detail.entity && (
        <>
          <Image
            className="hero-wrapper-poster"
            src={
              movie_detail.entity.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie_detail.entity.backdrop_path}`
                : "https://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
            }
            alt=""
          />
          <Container data={{ hg: "hvgh" }}>
            <Row>
              <Col>
                <div className="hero-desc text-light">
                  <div className="d-flex mb-5 text-sm">
                    <div className="pl-2 pr-3 font-weight-bold">
                      {moment(movie_detail.entity).format("MMM DD YYYY")}
                    </div>
                    <div className="d-flex text-light ml-5">
                      <StarIcon style={{ fontSize: 18 }} className="mt-1" />
                      <span className="ml-2">
                        {movie_detail.entity.vote_average}
                      </span>
                    </div>
                  </div>
                  <h1 className="py-5 font-weight-bolder">
                    {movie_detail.entity.original_title}
                  </h1>
                  <div className="d-flex font-weight-bold text-xl">
                    {movie_detail.entity.runtime}min |
                    {movie_detail.entity.genres.map((genre, index) => (
                      <div key={index} className="px-2 text-light">
                        {genre.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};
export default DetailHero;
