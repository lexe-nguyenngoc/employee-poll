import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import { transformQuestionToType } from "../../../../utils";
import { selectQuestions } from "../../employeePollSlice";
import { selectCurrentUser } from "../../../auth/authSlice";
import { getQuestionsThunk } from "../../asyncActions";
import QuestionsContainer from "../../components/QuestionsContainer";
import Container from "../../../../components/Container";
import Button from "../../../../components/forms/Button";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  const questions = useSelector(selectQuestions);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [showUnanswered, setShowUnanswered] = useState(true);

  const transformedQuestions = useMemo(() => {
    const transformedQuestions = transformQuestionToType(
      questions,
      currentUser.id
    );

    return transformedQuestions;
  }, [questions, currentUser]);

  useEffect(() => {
    dispatch(getQuestionsThunk());
  }, []);

  return (
    <Container className={cx("home")}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setShowUnanswered((prevState) => !prevState);
        }}
      >
        Show {showUnanswered ? "New Question" : "Done"}
      </Button>

      <QuestionsContainer
        heading={showUnanswered ? "New Questions" : "Done"}
        questions={
          showUnanswered ? transformedQuestions.new : transformedQuestions.done
        }
      />
    </Container>
  );
};

export default Home;
