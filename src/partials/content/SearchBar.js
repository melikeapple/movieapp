import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
  Collapse,
} from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";
import FilterListIcon from "@material-ui/icons/FilterList";
import DropdownSelect from "../layout/DropdownSelect";
import { actions } from "../../store/ducks/search.movie.duck";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
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

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <>
      <div className="header py-5  bg-darkblue">
        <div className="searchbar-section">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="d-flex align-items-center">
                  <InputGroup className="">
                    <InputGroup.Prepend className="">
                      <div className="d-flex align-items-center px-3 bg-lightblack text-light">
                        <SearchIcon style={{ fontSize: 24 }} />
                      </div>
                    </InputGroup.Prepend>
                    <FormControl
                      className="border-0 bg-lightblack text-light"
                      placeholder="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <InputGroup.Append className="">
                      <div className="d-flex align-items-center px-3 bg-lightblack text-light">
                        <ClearSharpIcon
                          style={{ fontSize: 24 }}
                          onClick={clearSearch}
                        />
                      </div>
                    </InputGroup.Append>
                  </InputGroup>
                  <Button
                    variant="light"
                    className="ml-2"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse"
                    aria-expanded={open}
                  >
                    <FilterListIcon />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Collapse in={open}>
        <div id="collapse" className="w-100 bg-bluepurple py-5">
          <Container>
            <Row>
              <Col>
                <div className="d-flex">
                  <DropdownSelect
                    label="Genre"
                    placeholder={"Seçin"}
                    disabled={false}
                    onSelect={(payload) => onSelect(payload, "with_genres")}
                    selectFirstItem={true}
                    data={[
                      {
                        id: 1,
                        title: "All",
                      },
                      {
                        id: 2,
                        title: "Action",
                      },
                      {
                        id: 3,
                        title: "Comedy",
                      },
                      {
                        id: 4,
                        title: "Horror",
                      },
                    ]}
                  />{" "}
                  <DropdownSelect
                    label="Year"
                    onSelect={(payload) => onSelect(payload, "year")}
                    selectFirstItem
                    data={[
                      {
                        id: 1,
                        title: "2021",
                      },
                      {
                        id: 2,
                        title: "2020",
                      },
                      {
                        id: 3,
                        title: "2019",
                      },
                      {
                        id: 4,
                        title: "2018",
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
    </>
  );
};
export default SearchBar;
