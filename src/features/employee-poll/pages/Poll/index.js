import classNames from "classnames/bind";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { generateUserAvt } from "../../../../utils";
import { selectCurrentUser } from "../../../auth/authSlice";
import { selectQuestion, selectQuestionLoading } from "../../employeePollSlice";

import Container from "../../../../components/Container";
import Answer from "../../components/Answer";

import { useEffect } from "react";
import { getQuestionThunk, saveQuestionAnswer } from "../../asyncActions";
import styles from "./Poll.module.scss";

const cx = classNames.bind(styles);

const Poll = () => {
  const params = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const question = useSelector(selectQuestion);
  const loading = useSelector(selectQuestionLoading);
  const dispatch = useDispatch();

  const handleAnswerClick = (answer) => {
    dispatch(
      saveQuestionAnswer({
        authedUser: currentUser.id,
        qid: question.id,
        answer
      })
    );
  };

  const renderOptionHistory = (key, label) => {
    const { votes } = question[key];
    return (
      <div>
        {label}:{" "}
        <b>
          {votes.length > 0
            ? votes.map((x) => (x === currentUser.id ? "You" : x)).join(", ")
            : "None"}
        </b>
      </div>
    );
  };

  useEffect(() => {
    const failFn = () => {
      navigate("/not-found");
    };
    dispatch(
      getQuestionThunk({
        failFn,
        id: params.question_id
      })
    );
  }, [dispatch, navigate, params.question_id]);

  if (!question) return <></>;
  return (
    <Container className={cx("poll")}>
      <h1 className={cx("poll__heading")}>Poll by {currentUser.name}</h1>

      <img
        src={generateUserAvt(currentUser.avatarURL)}
        alt={currentUser.name}
      />

      <h3 className={cx("poll__title")}>Would You Rather</h3>
      {!loading && (
        <div className={cx("poll__answer-group")}>
          <Answer
            answered={question.optionOne.votes.includes(currentUser.id)}
            answer={question.optionOne}
            onClick={() => handleAnswerClick("optionOne")}
          />
          <Answer
            answered={question.optionTwo.votes.includes(currentUser.id)}
            answer={question.optionTwo}
            onClick={() => handleAnswerClick("optionTwo")}
          />
        </div>
      )}

      {currentUser.answers[question.id] && (
        <div className={cx("poll__history")}>
          <h3>History</h3>
          {renderOptionHistory("optionOne", "Option One")}
          {renderOptionHistory("optionTwo", "Option Two")}
        </div>
      )}
    </Container>
  );
};

export default Poll;
