import React from "react";
import SearchBar from "../content/SearchBar";

const Layout = ({ children }) => {
  return (
    <div className="content-base">
      <SearchBar />
      <div className="py-5 bg-darkbluepurple">{children}</div>
    </div>
  );
};

export default Layout;
