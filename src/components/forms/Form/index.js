import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

const Form = ({ heading, onSubmit, children }) => {
  return (
    <form className={cx("form")} onSubmit={onSubmit}>
      <h3 className={cx("form__heading")}>{heading}</h3>
      <div className={cx("form__container")}>{children}</div>
    </form>
  );
};

Form.propTypes = {
  heading: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
