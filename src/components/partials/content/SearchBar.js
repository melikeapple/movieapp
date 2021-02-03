import React, { useState } from "react";
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

const SearchBar = () => {
  const [open, setOpen] = useState(true);

  const onSelect = (payload) => {
    console.log({ payload });
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
                    />
                    <InputGroup.Append className="">
                      <div className="d-flex align-items-center px-3 bg-lightblack text-light">
                        <ClearSharpIcon style={{ fontSize: 24 }} />
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
        <div id="collapse" className="w-100 bg-darkbluepurple py-5">
          <Container>
            <Row>
              <Col>
                <div className="d-flex">
                  <DropdownSelect
                    label="Genre"
                    onSelect={onSelect}
                    selectFirstItem
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
                    onSelect={onSelect}
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