import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./QuestionsContainer.module.scss";
import Question from "../Question";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const QuestionsContainer = ({ heading, questions }) => {
  const navigate = useNavigate();

  const handleGoToPoll = (question) => navigate(`/questions/${question.id}`);

  return (
    <div className={cx("questions-container")}>
      <h3 className={cx("questions-container__heading")}>{heading}</h3>

      <ul className={cx("questions-container__list")}>
        {questions.map((question) => (
          <li key={question.id}>
            <Question question={question} onShowClick={handleGoToPoll} />
          </li>
        ))}
      </ul>
    </div>
  );
};

QuestionsContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired
};

export default QuestionsContainer;
