import React, { useState } from "react";
import { Image, Collapse } from "react-bootstrap";
import StarIcon from "@material-ui/icons/Star";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const DetailBody = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="row detail-wrapper h-100">
      <div className="col-md-4">
        <div className="overflow-hidden">
          <Image
            src="https://picsum.photos/1024/768?random=1"
            alt=""
            className="detail-wrapper-poster w-100"
          />
        </div>
      </div>
      <div className="col-md-8 pt-5 pt-md-0">
        <div className="row">
          <div className="col-sm">
            <div className="separator d-flex justify-content-around align-items-center text-light bg-danger px-5 py-3">
              <div className="d-flex flex-column flex-grow-1 px-4 text-center">
                <div>
                  <div className="custom-line text-xxl font-weight-bold d-inline-block">
                    8.1
                  </div>
                  <div className="custom-line text-dark text-md d-inline-block">
                    /10
                  </div>
                </div>
                <div>
                  <StarIcon style={{ fontSize: 18 }} />
                  <div className="text-sm ml-2 d-inline-block">178.00</div>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center flex-grow-1 text-light px-4 text-center">
                <div className="text-lg font-weight-bold">Popularity</div>
                <div className="text-sm">Rising(5k)</div>
              </div>
              <div className="d-flex flex-column justify-content-center flex-grow-1 text-light px-4 text-center">
                <div className="text-lg font-weight-bold">Released</div>
                <div className="text-sm">1 Feb 2020</div>
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
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
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
              <a className="text-muted text-decoration-none ml-2">
                Russel Crowe,Joaquin Phoenix
              </a>
            </div>
            <div className="py-1">
              Stars:
              <a className="text-muted text-decoration-none ml-3">
                Russel Crowe,Joaquin Phoenix
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBody;
