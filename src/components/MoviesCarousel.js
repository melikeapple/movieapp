import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Container, Card, Badge } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import Slider from "react-slick";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import moment from "moment";
import { Link } from "react-router-dom";
import { useMedia } from "../utils";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon className="d-block" style={{ color: "white" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon className="d-block" style={{ color: "white" }} />
    </div>
  );
}

const MoviesCarouselLoader = (props) => {
  const [columnWidth, setColumnWidth] = useState(0);
  const columnCount = useMedia(
    ["(min-width: 992px)", "(min-width: 768px)", "(min-width: 576px)"],
    [4, 3, 2],
    1
  );
  const spacer = 12;
  const width = 1112;

  useEffect(() => {
    setColumnWidth(width / columnCount - spacer);
  }, [columnCount]);

  return (
    <ContentLoader
      speed={1}
      viewBox="0 0 1112 371"
      backgroundColor="#CFCFCF"
      foregroundColor="#ffffff"
      {...props}
    >
      {Array.from({ length: columnCount }).map((entity, i) => {
        return (
          <rect
            key={i}
            x={columnWidth * i + spacer * i}
            y="0"
            rx="4"
            ry="4"
            width={columnWidth}
            height="371"
          />
        );
      })}
    </ContentLoader>
  );
};

const MoviesCarousel = ({ data, title }) => {
  const slider = useRef(null);
  const settings = {
    infinite: true,
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="popular-section w-100 py-7">
              <h4 className="text-light py-2">{title}</h4>

              {data.loading && <MoviesCarouselLoader />}

              {data.entity && data.entity.results.length > 0 && (
                <Slider ref={slider} {...settings}>
                  {data.entity.results.map((entity, index) => (
                    <Card
                      className="card-container bg-lightblack w-100"
                      key={index}
                    >
                      <Card.Img
                        className="w-100"
                        variant="top"
                        src={
                          entity.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500/${entity.backdrop_path}`
                            : 'http://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"'
                        }
                      />
                      <Card.Body>
                        <div className="d-flex">
                          <Card.Title className="text-xs text-light text-uppercase mr-3">
                            {entity.original_language}
                          </Card.Title>
                          <Card.Title className="text-xs text-light text-uppercase">
                            {moment(entity.release_date).format("YYYY")}
                          </Card.Title>
                        </div>
                        <Card.Title className="text-sm text-light">
                          <Link
                            to={`/detail?id=${entity.id}`}
                            className="text-light stretched-link"
                          >
                            {entity.original_title}
                          </Link>
                        </Card.Title>
                        <div className="d-flex align-items-center">
                          <Badge className="bg-warning text-dark pr-3 mr-4 text-center">
                            IMDb
                          </Badge>
                          <div className="d-flex align-items-center text-sm text-lightgrey">
                            <div className="text-sm">
                              {entity.vote_average}/10
                            </div>
                          </div>
                        </div>
                        <Card.Text className="text-xs text-light mt-3">
                          Action,Adventure,Crime,Thiriller
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Slider>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MoviesCarousel;
