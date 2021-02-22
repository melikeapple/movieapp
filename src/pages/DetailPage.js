import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { actions } from "../store/ducks/movie.detail.duck";
import DetailHero from "../components/DetailHero";
import DetailBody from "../components/DetailBody";

const DetailPage = () => {
  const dispatch = useDispatch();

  const { query } = useSelector(
    ({ router }) => ({
      query: router.location.query,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.movieDetailRequest(query));
    dispatch(actions.movieDetailRequestResetStore());
    console.log("query", query);
  }, [query]);

  return (
    <>
      <DetailHero />

      <Container>
        <div
          style={{
            marginTop: -70,
            position: "relative",
          }}
        >
          <Row>
            <Col lg={8} className="pr-md-0">
              <DetailBody />
            </Col>
            <Col lg={4} className="pl-md-0">
              <div
                className="h-100"
                style={{
                  backgroundColor: "#1F1F1F",
                }}
              >
                asdas
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default DetailPage;
