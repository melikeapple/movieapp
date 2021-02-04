import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import data from "../dummyData/data";

const SearchResult = () => {
  const { movie_search } = useSelector(
    ({ movie_search }) => ({ movie_search }),
    shallowEqual
  );

  return (
    <div className="bg-darkbluepurple">
      <Container>
        <Row>
          {/*{movie_search.entity &&
            movie_search.entity.results.map((entity, index) => (
              <Col key={index}>{entity.original_title}</Col>
            ))}*/}
          {data.map((entity, index) => (
            <Col key={index} md={3} className="mb-9">
              <Card className="card-container bg-lightblack w-100 ">
                <Card.Img
                  as="img"
                  className="w-100 "
                  variant="top"
                  src={
                    `https://image.tmdb.org/t/p/w500/` + entity.backdrop_path
                  }
                />
                <Card.Body>
                  <Card.Title className="text-xs text-light text-uppercase">
                    {entity.original_language},{entity.release_date}
                  </Card.Title>
                  <Card.Title className="text-sm text-light">
                    {entity.title}
                  </Card.Title>
                  <Card.Text>{entity.adult}</Card.Text>
                  <div className="d-flex align-items-center">
                    <Badge className="bg-warning text-dark pr-3 mr-4 text-center">
                      IMDb
                    </Badge>
                    <div className="d-flex align-items-center text-sm text-lightgrey">
                      {entity.vote_average}
                      <div className="text-sm">/10</div>
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
