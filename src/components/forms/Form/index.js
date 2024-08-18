import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

const Form = ({
  heading,
  className,
  containerClassName,
  onSubmit,
  children
}) => {
  return (
    <form className={cx("form", className)} onSubmit={onSubmit}>
      <h3 className={cx("form__heading")}>{heading}</h3>
      <div className={cx(containerClassName, "form__container")}>
        {children}
      </div>
    </form>
  );
};

Form.propTypes = {
  heading: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
