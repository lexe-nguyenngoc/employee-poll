import classNames from "classnames/bind";
import React from "react";

import Container from "../../../../components/Container";

import styles from "./Poll.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../auth/authSlice";
import { generateUserAvt } from "../../../../utils";
import Answer from "../../components/Answer";
import {
  selectQuestion,
  selectQuestionLoadingCompleted
} from "../../employeePollSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { saveQuestionAnswer } from "../../asyncActions";

const cx = classNames.bind(styles);

const Poll = () => {
  const params = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const question = useSelector(selectQuestion(params.id));
  const isFetched = useSelector(selectQuestionLoadingCompleted);
  const dispatch = useDispatch();

  const handleAnswerClick = (answer) => {
    dispatch(
      saveQuestionAnswer({
        answer: {
          authedUser: currentUser.id,
          qid: question.id,
          answer
        },
        callback: () => {
          navigate("/");
        }
      })
    );
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
          answer={question.optionOne}
          onClick={() => handleAnswerClick("optionOne")}
        />
        <Answer
          answer={question.optionTwo}
          onClick={() => handleAnswerClick("optionTwo")}
        />
      </div>
    </Container>
  );
};

export default Poll;
