import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./FormField.module.scss";

const cx = classNames.bind(styles);

const FormField = ({ children, required, id, label, message }) => {
  return (
    <div className={cx("form-field")}>
      <label className={cx("form-field__label", { required })} htmlFor={id}>
        {label}
      </label>
      <div className={cx("form-field__control")}>{children}</div>
      <div className={cx("form-field__message", { show: message })}>
        {message}
      </div>
    </div>
  );
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default FormField;
