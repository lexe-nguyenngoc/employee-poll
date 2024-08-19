import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";

import {
  selectQuestionLoading,
  selectQuestionLoadingCompleted
} from "../../features/employee-poll/employeePollSlice";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

const Loading = () => {
  const loading = useSelector(selectQuestionLoading);
  const isCompleted = useSelector(selectQuestionLoadingCompleted);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCompleted) {
      timeout = setTimeout(() => {
        setHide(true);
      }, 1000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isCompleted]);

  return (
    <div
      className={cx("loading", { show: loading, completed: isCompleted, hide })}
    />
  );
};

export default Loading;
