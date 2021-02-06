import moment from "moment";
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const SearchResult = () => {
  const { movie_search } = useSelector(
    ({ movie_search }) => ({ movie_search }),
    shallowEqual
  );

  return (
    <div className="bg-darkbluepurple">
      <Container>
        <Row>
          {movie_search.entity &&
            movie_search.entity.results.length > 0 &&
            movie_search.entity.results.map((entity, index) => (
              <Col md={3} className="mb-9" key={index}>
                <Card className="card-container bg-lightblack w-100 ">
                  <Card.Img
                    className="w-100"
                    variant="top"
                    src={
                      entity.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${entity.backdrop_path}`
                        : "http://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
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
                        className="link-light stretched-link"
                      >
                        {entity.title}
                      </Link>
                    </Card.Title>
                    <div className="d-flex align-items-center">
                      <Badge className="bg-warning text-dark pr-3 mr-4 text-center">
                        IMDb
                      </Badge>
                      <div className="d-flex align-items-center text-sm text-lightgrey">
                        <div className="text-sm">{entity.vote_average}/10</div>
                      </div>
                    </div>
                    <Card.Text className="text-xs text-light mt-3">
                      Action,Adventure,Crime,Thiriller
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default SearchResult;
