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

  return <div className={cx("loading", { show: loading })} />;
};

export default Loading;
