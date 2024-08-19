import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTransformedQuestions } from "../../employeePollSlice";
import { getQuestionsThunk } from "../../asyncActions";
import QuestionsContainer from "../../components/QuestionsContainer";

const cx = classNames.bind(styles);

const Home = () => {
  const data = useSelector(selectTransformedQuestions);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(getQuestionsThunk());
  }, []);

  return (
    <div className={cx("home")}>
      <QuestionsContainer heading="New Questions" questions={data.new} />
      <QuestionsContainer heading="Done" questions={data.done} />
    </div>
  );
};

export default Home;
