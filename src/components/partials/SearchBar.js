import React, {useState} from "react";
import {
Row,
Col,
Container,
InputGroup,
FormControl,
Button,
Collapse,
DropdownButton, Dropdown
} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import FilterListIcon from '@material-ui/icons/FilterList';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const SearchBar = () => {
const data = [
{
    "id": 1,
    "name": "Types",
},
{
    "id": 2,
    "name": "Rating",
}, {
    "id": 3,
    "name": "Genre",
}, {
    "id": 4,
    "name": "All Filt",
}
]
const [open, setOpen] = useState(false)
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
                                        <SearchIcon style={{fontSize: 24}}/></div>
                                </InputGroup.Prepend>
                                <FormControl
                                    className="border-0 bg-lightblack text-light"
                                    placeholder="Search"
                                />
                                <InputGroup.Append className="">
                                    <div className="d-flex align-items-center px-3 bg-lightblack text-light">
                                        <ClearSharpIcon style={{fontSize: 24}}/></div>
                                </InputGroup.Append>
                            </InputGroup>
                            <Button variant="light" className="ml-2" onClick={() => setOpen(!open)}
                                    aria-controls="collapse"
                                    aria-expanded={open}><FilterListIcon/></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    <Collapse in={open}>
        <div id="collapse" className="w-100 bg-darkbluepurple mb-0 pb-0">
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex p-5 justify-content-end">
                            {data && data.length > 0 ? data.map((e, i) => (
                                <DropdownButton
                                    className="dropdown-select ml-3 bg-bluepurple"
                                    variant=""
                                    key={i}

                                    title={<div className="d-flex justify-content-between text-light">
                                        <div>{e.name}</div>
                                        <KeyboardArrowDownIcon/>
                                    </div>}
                                >
                                    <div className="bg-darkbluepurple w-100 p-0">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another
                                            action</Dropdown.Item>

                                        <Dropdown.Item eventKey="3">Something else
                                            here</Dropdown.Item>

                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </div>
                                </DropdownButton>
                            )) : null}

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Collapse>
</>
)
}
export default SearchBar