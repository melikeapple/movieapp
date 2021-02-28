import React, { useEffect, useState } from "react";
import { Section } from "./Section";
import _ from "lodash";

const MovieDetailStory = ({ data }) => {
  const [crew, setCrew] = useState();

  useEffect(() => {
    if (data.entity && data.entity.credits) {
      setCrew(
        _.find(
          data.entity.credits.crew,
          ({ department }) => department === "Writing"
        )
      );
    }
  }, [data.entity]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Section>
              <Section.Header />
              <Section.Body>
                <div className="text-dark text-md font-weight-bold pb-2 pt-6">
                  Storyline...
                </div>
                <div className="text-left text-sm mb-2">
                  {data.entity && data.entity.overview}
                </div>
                <div className="text-left text-sm pt-3">
                  Written by:
                  {crew && crew.name}
                </div>
              </Section.Body>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailStory;
