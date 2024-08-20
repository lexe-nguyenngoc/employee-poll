import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

const Container = ({ children, className }) => {
  return <div className={cx(className, "container")}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;
