import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { actions } from "../../store/ducks/search.movie.duck";
import CustomSelect from "./CustomSelect";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const { movie_search } = useSelector(
    ({ movie_search }) => ({ movie_search }),
    shallowEqual
  );

  useEffect(() => {
    if (query.length > 2) {
      dispatch(actions.searchMovieRequest(query));
    } else {
      dispatch(actions.searchMovieResetStore());
    }
  }, [query]);

  const onSelect = (payload, type) => {
    if (payload && payload.title) {
      dispatch(
        actions.searchMovieRequest({
          year: type === "year" && payload.title,
          with_genres: type === "with_genres" && payload.title,
          page: 1,
        })
      );
    } else {
      return payload;
    }
  };

  return (
    <>
      <div className="header py-5 bg-darkblue">
        <div className="searchbar-section">
          <Container>
            <Row>
              <Col>
                <Navbar bg="transparent" expand="lg">
                  <Link
                    to="/"
                    className="bg-danger text-light px-7 weight-bolder navbar-brand"
                  >
                    IMDb
                  </Link>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    variant="dark"
                    bg="dark"
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown
                        title="Genre"
                        id="basic-nav-dropdown"
                        className="white"
                      >
                        <NavDropdown.Item
                          href="#action/3.1"
                          className="text-light"
                        >
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action/3.2"
                          className="text-light"
                        >
                          Another action
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                  <Nav>
                    <CustomSelect />
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
