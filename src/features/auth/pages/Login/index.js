import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Form, InputField } from "../../../../components/forms";

const loginSchema = yup.object({
  username: yup.string().required("This field must be required!"),
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
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const handleLogin = (data) => {
    console.log({ data });
  };

  return (
    <Form heading="Login" onSubmit={handleSubmit(handleLogin)}>
      <InputField
        name="username"
        label="Username"
        required
        placeholder="Input your username"
        type="text"
        register={register}
        message={errors?.username?.message}
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
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginPage;
