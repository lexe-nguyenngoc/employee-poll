import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputField.module.scss";
import FormField from "../FormField";

const cx = classNames.bind(styles);

/**
 *
 * @param {{id: string, name: string, placeholder: string, type: 'email'|'text'|'password', label: string, required: boolean}} props
 */

const InputField = ({
  id,
  name,
  placeholder,
  type = "text",
  label,
  required
}) => {
  return (
    <FormField id={id} label={label} required={required}>
      <input
        className={cx("input-field")}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </FormField>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["email", "text", "password"])
};

export default InputField;
