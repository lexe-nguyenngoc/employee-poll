import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputField.module.scss";

const cx = classNames.bind(styles);

/**
 *
 * @param {{id: string, name: string, placeholder: string, type: 'email'|'text'|'password'}} props
 */

const InputField = ({ id, name, placeholder, type }) => {
  return (
    <input
      className={cx("input-field")}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default InputField;
