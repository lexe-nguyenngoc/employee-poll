import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import authImage from "../../assets/images/login.png";

import styles from "./Auth.module.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./authSlice";

const cx = classNames.bind(styles);

const Auth = () => {
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser) return <Navigate to="/" />;

  return (
    <div className={cx("auth")}>
      <img className={cx("auth__image")} src={authImage} alt="Auth" />

      <Outlet />
    </div>
  );
};

export default Auth;
