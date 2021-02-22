import React, { useState } from "react";
import _ from "lodash";
import StarIcon from "@material-ui/icons/Star";
import { Collapse } from "react-bootstrap";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import moment from "moment";

const MovieDetailDesc = ({ data }) => {
  console.log("DetailDescData:", data.entity);
  const [open, setOpen] = useState(false);

  return (
    <>
      {data.entity && (
        <div className="col-md-8 pt-5 pt-md-0">
          <div className="row">
            <div className="col-sm">
              <div className="separator d-flex justify-content-around align-items-center text-light bg-danger px-5 py-3">
                <div className="d-flex flex-column  px-4 text-center">
                  <div>
                    <div className="custom-line text-xxl font-weight-bold d-inline-block">
                      {data.entity.vote_average}
                    </div>
                    <div className="custom-line text-dark text-md d-inline-block">
                      /10
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <StarIcon className="text-md " style={{ marginTop: -2 }} />
                    <div className="text-sm ml-2  d-inline-block">
                      {data.entity.vote_count}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center flex-grow-1 text-light px-4 text-center">
                  <div className="text-lg font-weight-bold">Popularity</div>
                  <div className="text-sm">
                    Rising:({data.entity.popularity})
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center flex-grow-1 text-light px-4 text-center">
                  <div className="text-lg font-weight-bold">Released</div>
                  <div className="text-sm">
                    {moment(data.entity).format("MMM DD YYYY")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="d-flex flex-column flex-grow-1 py-8">
                <Collapse in={open}>
                  <div
                    id="partialCollapse"
                    className="partial-collapse"
                    aria-expanded={open}
                  >
                    {data.entity.overview}
                  </div>
                </Collapse>
                <a
                  href="#"
                  className="mt-3 text-sm text-muted text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                  aria-controls="partialCollapse"
                  data-toggle="collapse"
                  aria-expanded={open}
                >
                  {open ? "Read Less" : "Read More"}
                  <DoubleArrowIcon className="text-sm text-muted" />
                </a>
              </div>
              <div className="py-1">
                Creators:
                {_.take(data.entity.credits.crew, 2).map((cre, index) => (
                  <a
                    key={index}
                    className="text-muted text-decoration-none ml-3"
                  >
                    {cre.name}
                  </a>
                ))}
              </div>
              <div className="py-1">
                Stars:
                {_.take(data.entity.credits.cast, 3).map((act, index) => (
                  <a
                    key={index}
                    className="text-muted text-decoration-none ml-3"
                  >
                    {act.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailDesc;
