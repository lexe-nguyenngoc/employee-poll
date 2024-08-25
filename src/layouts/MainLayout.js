import React from "react";
import PropTypes from "prop-types";

import Nav from "../features/employee-poll/components/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};
export default MainLayout;
