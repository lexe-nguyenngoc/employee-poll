import React, { useEffect, useMemo } from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import { transformQuestionToType } from "../../../../utils";
import { selectQuestions } from "../../employeePollSlice";
import { selectCurrentUser } from "../../../auth/authSlice";
import { getQuestionsThunk } from "../../asyncActions";
import QuestionsContainer from "../../components/QuestionsContainer";
import Container from "../../../../components/Container";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  const questions = useSelector(selectQuestions);
  const currentUser = useSelector(selectCurrentUser);

  const transformedQuestions = useMemo(() => {
    const transformedQuestions = transformQuestionToType(
      questions,
      currentUser.id
    );

    return transformedQuestions;
  }, [questions, currentUser]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsThunk());
  }, []);

  return (
    <Container className={cx("home")}>
      <QuestionsContainer
        heading="New Questions"
        questions={transformedQuestions.new}
      />
      <QuestionsContainer
        heading="Done"
        questions={transformedQuestions.done}
      />
    </Container>
  );
};

export default Home;
