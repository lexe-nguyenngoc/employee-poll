import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import authImage from "../../assets/images/login.png";

import { useSelector } from "react-redux";
import styles from "./Auth.module.scss";
import { selectCurrentUser } from "./authSlice";

const cx = classNames.bind(styles);

const Auth = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      navigate(location.state?.path || "/");
    }
  }, [currentUser, location.state?.path, navigate]);

  return (
    <div className={cx("auth")}>
      <img className={cx("auth__image")} src={authImage} alt="Auth" />

      <Outlet />
    </div>
  );
};

export default Auth;
