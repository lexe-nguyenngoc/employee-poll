import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import authImage from "../../assets/images/login.png";

import styles from "./Auth.module.scss";

const cx = classNames.bind(styles);

const Auth = () => {
  return (
    <div className={cx("auth")}>
      <img className={cx("auth__image")} src={authImage} alt="Auth" />

      <Outlet />
    </div>
  );
};

export default Auth;
