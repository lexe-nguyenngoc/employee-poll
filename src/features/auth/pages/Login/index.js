import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { loginAsync } from "../../asyncActions";
import { resetErrorMessage, selectState } from "../../authSlice";
import { Button, Form, InputField } from "../../../../components/forms";
import ErrorMessage from "../../components/ErrorMessage";

const loginSchema = yup.object({
  user: yup.string().required("This field must be required!"),
  password: yup
    .string()
    .required("This field must be required!")
    .min(6, "The password must be at least 6 characters long!")
    .max(16, "The password must be at most 16 characters long!")
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const { errorMessage, loading } = useSelector(selectState);
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(loginAsync(data));
  };

  useEffect(() => {
    if (!errorMessage) return;

    const subscribe = watch(() => {
      dispatch(resetErrorMessage());
    });

    return () => {
      subscribe?.unsubscribe?.();
    };
  }, [errorMessage]);

  return (
    <Form heading="Login" onSubmit={handleSubmit(handleLogin)}>
      <InputField
        name="user"
        label="User"
        required
        placeholder="Input your user"
        type="text"
        register={register}
        message={errors?.user?.message}
      />
      <InputField
        name="password"
        label="Password"
        required
        placeholder="Input your password"
        type="password"
        register={register}
        message={errors?.password?.message}
      />

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Button color="primary" variant="contained" type="submit">
        {loading ? "Loading" : "Submit"}
      </Button>
    </Form>
  );
};

export default LoginPage;
