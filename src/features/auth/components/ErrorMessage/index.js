import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./ErrorMessage.module.scss";

const cx = classNames.bind(styles);

const ErrorMessage = ({ children, className }) => {
  return <p className={cx("error-message")}>{children}</p>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  variant: PropTypes.oneOf(["contained", "outlined"])
};

export default ErrorMessage;
