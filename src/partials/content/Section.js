import React from "react";
import classNames from "classnames";

const Section = ({ children }) => {
  return <div className={classNames("section")}>{children}</div>;
};

const Header = ({ children }) => {
  return <div className={classNames("section-header")}>{children}</div>;
};

const Body = ({ children, className }) => {
  return (
    <div className={classNames("section-body", className)}>{children}</div>
  );
};

Section.Header = Header;
Section.Body = Body;

export { Section };
