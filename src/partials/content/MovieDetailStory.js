import React from "react";
import { Section } from "./Section";

const MovieDetailStory = () => {
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
                <div className="text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
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
