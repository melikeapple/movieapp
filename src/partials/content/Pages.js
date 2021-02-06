import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";

const Pages = () => {
  const [active, setActive] = useState();
  const data = [
    {
      id: 1,
      page: 1,
    },
    {
      id: 2,
      page: 2,
    },
    {
      id: 3,
      page: 3,
    },
    {
      id: 4,
      page: 4,
    },
  ];

  const onClick = (payload) => {
    setActive(payload);
    console.log(payload);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Pagination className="d-flex align-items-center justify-content-center">
              <Pagination.First />
              {data.map((p, i) => (
                <Pagination.Item
                  key={i}
                  onClick={() => onClick(p)}
                  active={_.isEqual(p, active)}
                >
                  {p.page}
                </Pagination.Item>
              ))}
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Pages;
