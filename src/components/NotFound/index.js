import React from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import Button from "../forms/Button";
import Container from "../Container";

import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <Container className={cx("not-found")}>
        <h1>Opp! Not found!</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToHomeClick}
        >
          Back to home
        </Button>
      </Container>
    </>
  );
};

export default NotFound;
