import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import Container from "../../../../components/Container";
import { Button, Form, InputField } from "../../../../components/forms";

import { selectCurrentUser } from "../../../auth/authSlice";

import { _saveQuestion } from "../../../../api";

import styles from "./NewPoll.module.scss";

const cx = classNames.bind(styles);

const schema = yup.object({
  optionOneText: yup
    .string()
    .required("Please input this field!")
    .min(6, "This field must be at least 10 characters long."),
  optionTwoText: yup
    .string()
    .required("Please input this field!")
    .min(6, "This field must be at least 10 characters long.")
});

const NewPoll = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleCreatePoll = async (data) => {
    await _saveQuestion({ ...data, author: currentUser.id });
    navigate("/");
  };

  return (
    <Container className={cx("new-poll")}>
      <h3 className={cx("new-poll__caption")}>Would You Rather</h3>

      <Form
        heading="Create Your Own Poll"
        onSubmit={handleSubmit(handleCreatePoll)}
      >
        <InputField
          required
          label="First Option"
          name="optionOneText"
          placeholder="Option One"
          register={register}
          message={errors.optionOneText?.message}
        />
        <InputField
          required
          label="Second Option"
          name="optionTwoText"
          placeholder="Option Two"
          register={register}
          message={errors.optionTwoText?.message}
        />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default NewPoll;
