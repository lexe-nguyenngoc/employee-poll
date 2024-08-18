import React, { useId } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputField.module.scss";
import FormField from "../FormField";

const cx = classNames.bind(styles);

/**
 *
 * @param {{ name: string, placeholder: string, type: 'email'|'text'|'password', label: string, required: boolean, register: func, message: string}} props
 */

const InputField = ({
  name,
  placeholder,
  type = "text",
  label,
  required,
  register,
  message
}) => {
  const id = useId();
  return (
    <FormField id={id} label={label} required={required} message={message}>
      <input
        className={cx("input-field")}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </FormField>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["email", "text", "password"]),
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default InputField;
