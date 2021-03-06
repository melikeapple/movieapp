import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { actions } from "../store/ducks/movie.detail.duck";
import DetailHero from "../components/DetailHero";
import DetailBodySection1 from "../components/DetailBodySection1";
import DetailBodySection2 from "../components/DetailBodySection2";

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
    return () => {
      dispatch(actions.movieDetailRequestResetStore());
    };
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
              <DetailBodySection1 />
            </Col>
            <Col
              lg={4}
              className="pl-md-0"
              style={{ backgroundColor: "#1F1F1F" }}
            >
              <div className="h-100">
                <DetailBodySection2 query={query} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default DetailPage;
