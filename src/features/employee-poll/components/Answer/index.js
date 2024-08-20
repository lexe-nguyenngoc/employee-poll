import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Answer.module.scss";
import Button from "../../../../components/forms/Button";

const cx = classNames.bind(styles);

const Answer = ({ answer, className, onClick }) => {
  return (
    <div className={cx(className, "answer")}>
      <p className={cx("answer__text")}>{answer.text}</p>

      <Button
        color="primary"
        variant="contained"
        className={cx("answer__btn")}
        onClick={onClick}
      >
        Click
      </Button>
    </div>
  );
};

Answer.propTypes = {
  className: PropTypes.string,
  answer: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Answer;
