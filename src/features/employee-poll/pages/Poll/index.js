import classNames from "classnames/bind";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { _saveQuestionAnswer } from "../../../../api";
import { generateUserAvt } from "../../../../utils";
import { changeAnswer, selectCurrentUser } from "../../../auth/authSlice";
import {
  selectQuestion,
  selectQuestionLoadingCompleted
} from "../../employeePollSlice";

import Answer from "../../components/Answer";
import Container from "../../../../components/Container";

import styles from "./Poll.module.scss";

const cx = classNames.bind(styles);

const Poll = () => {
  const params = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const question = useSelector(selectQuestion(params.question_id));
  const isFetched = useSelector(selectQuestionLoadingCompleted);
  const dispatch = useDispatch();

  const handleAnswerClick = async (answer) => {
    await _saveQuestionAnswer({
      authedUser: currentUser.id,
      qid: question.id,
      answer
    });

    dispatch(changeAnswer({ qid: question.id, answer }));
    navigate("/");
  };

  if (isFetched && !question) return <Navigate to="/notfound" />;
  if (!question) return <></>;
  return (
    <Container className={cx("poll")}>
      <h1 className={cx("poll__heading")}>Poll by {currentUser.name}</h1>

      <img
        src={generateUserAvt(currentUser.avatarURL)}
        alt={currentUser.name}
      />

      <h3 className={cx("poll__title")}>Would You Rather</h3>
      <div className={cx("poll__answer-group")}>
        <Answer
          answered={currentUser.answers[question.id] === "optionOne"}
          answer={question.optionOne}
          onClick={() => handleAnswerClick("optionOne")}
        />
        <Answer
          answered={currentUser.answers[question.id] === "optionTwo"}
          answer={question.optionTwo}
          onClick={() => handleAnswerClick("optionTwo")}
        />
      </div>
    </Container>
  );
};

export default Poll;
