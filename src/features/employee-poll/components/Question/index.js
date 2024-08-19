import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Question.module.scss";
import Button from "../../../../components/forms/Button";
import { formatTime } from "../../../../utils";

const cx = classNames.bind(styles);

const Question = ({ question }) => {
  return (
    <div className={cx("question")}>
      <h3 className={cx("question__author")}>{question.author}</h3>
      <p className={cx("question__time")}>{formatTime(question.timestamp)}</p>
      <hr />
      <Button
        className={cx("question__btn")}
        color="primary"
        variant="outlined"
      >
        Show
      </Button>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired
};

export default Question;
