import React from "react";
import { Table } from "react-bootstrap";
import { Section } from "./Section";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const MovieDetailCast = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Section>
            <Section.Header />
            <Section.Body>
              <div className="text-dark text-md font-weight-bold pb-1 pt-6">
                Cast
              </div>

              <Table striped borderless bsPrefix="table">
                <tbody>
                  {data.entity &&
                    data.entity.credits.cast &&
                    data.entity.credits.cast.length > 0 &&
                    _.take(data.entity.credits.cast, 5).map((cas, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <th className="table-poster">
                            <img
                              className="h-100"
                              src={
                                cas.profile_path
                                  ? `https://image.tmdb.org/t/p/original/${cas.profile_path}`
                                  : "https://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
                              }
                              alt=""
                            />
                          </th>
                          <th
                            className="text-muted text-sm font-weight-normal"
                            style={{ verticalAlign: "middle" }}
                          >
                            {cas.name}
                          </th>
                          <th
                            className="text-muted text-sm font-weight-normal"
                            style={{ verticalAlign: "middle" }}
                          >
                            ... as {cas.character}
                          </th>
                        </tr>
                      </React.Fragment>
                    ))}
                </tbody>
              </Table>
              <div className="p-0 m-0 text-sm text-decoration-none custom-line text-muted">
                See full cast and crew <DoubleArrowIcon className="text-sm" />
              </div>
            </Section.Body>
          </Section>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailCast;
