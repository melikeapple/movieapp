import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
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
                  <Nav className="mr-auto">
                    <Nav.Link href="#home" className=" text-light">
                      Discover
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <CustomSelect />
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/*<div className="d-flex">*/}
      {/*  <DropdownSelect*/}
      {/*    label="Genre"*/}
      {/*    placeholder={"Seçin"}*/}
      {/*    disabled={false}*/}
      {/*    onSelect={(payload) => onSelect(payload, "with_genres")}*/}
      {/*    selectFirstItem={true}*/}
      {/*    data={[*/}
      {/*      {*/}
      {/*        id: 1,*/}
      {/*        title: "All",*/}
      {/*      },*/}
      {/*      {*/}
      {/*        id: 2,*/}
      {/*        title: "Action",*/}
      {/*      },*/}
      {/*      {*/}
      {/*        id: 3,*/}
      {/*        title: "Comedy",*/}
      {/*      },*/}
      {/*      {*/}
      {/*        id: 4,*/}
      {/*        title: "Horror",*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*  />{" "}*/}
      {/*  <DropdownSelect*/}
      {/*    label="Year"*/}
      {/*    onSelect={(payload) => onSelect(payload, "year")}*/}
      {/*    selectFirstItem*/}
      {/*    data={[*/}
      {/*      {*/}
      {/*        id: 1,*/}
      {/*        title: "2021",*/}
      {/*      },*/}
      {/*      {*/}
      {/*        id: 2,*/}
      {/*        title: "2020",*/}
      {/*      },*/}
      {/*      {*/}
      {/*        id: 3,*/}
      {/*        title: "2019",*/}
      {/*      },*/}
      {/*      {*/}
      {/*        id: 4,*/}
      {/*        title: "2018",*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</div>*/}
    </>
  );
};
export default SearchBar;
