import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const DropdownSelect = ({ label, onSelect, selectFirstItem, data, item }) => {
  const [value, setValue] = useState();

  const onClick = (payload) => {
    setValue(payload);
  };

  useEffect(() => {
    if (_.isEmpty(item) && selectFirstItem) {
      setValue(_.head(data));
    }
  }, []);

  useEffect(() => {
    if (item) {
      setValue(item);
    }
  }, [item]);

  return (
    <Dropdown className="dropdown-select ml-3 bg-bluepurple">
      <Dropdown.Toggle className="h-100" variant="" id="dropdown-basic">
        <div className="d-flex flex-column text-light ">
          <div className="d-flex justify-content-start pb-1 text-xs">
            <div>{label}</div>
          </div>
          <div className="d-flex justify-content-between text-sm">
            {value?.title}
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="bg-darkbluepurple w-100 p-0">
        {data.map((entity, index) => (
          <Dropdown.Item
            key={index}
            eventKey={entity.id}
            onClick={() => onClick(entity)}
            active={_.isEqual(entity, value)}
          >
            {entity.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default DropdownSelect;
