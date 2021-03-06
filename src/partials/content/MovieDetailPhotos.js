import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const MovieDetailPhotos = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-light pb-3">Photos</div>
            {data.entity && data.entity.images && data.entity.images.backdrops && (
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
              >
                {data.entity.images.backdrops.map((image, ind) => (
                  <Carousel.Item key={ind}>
                    <img
                      className="w-100"
                      src={
                        image.file_path
                          ? `https://image.tmdb.org/t/p/original/${image.file_path}`
                          : "https://www.bnsf.com/about-bnsf/virtual-train-tour/images/orionthemes-placeholder-image.png"
                      }
                      alt={image.title}
                    />
                  </Carousel.Item>
                ))}
                <div
                  className="text-light text-sm py-4"
                  style={{ cursor: "pointer" }}
                >
                  See all photos <DoubleArrowIcon className="text-sm" />
                </div>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetailPhotos;
