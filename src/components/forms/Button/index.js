import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

/**
 *
 * @param {{type: 'submit' | 'button', color: 'primary' | 'secondary', variant: "contained" |'outlined'}} param0
 * @returns
 */
const Button = ({
  children,
  className,
  type = "button",
  color,
  variant,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={cx(className, "btn", variant, color)}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["submit", "button"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  variant: PropTypes.oneOf(["contained", "outlined"])
};

export default Button;
