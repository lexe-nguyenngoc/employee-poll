import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer, {
  ROOT_STATE_NAME as auth
} from "../features/auth/authSlice";
import employeePollReducer, {
  ROOT_STATE_NAME as employeePollName
} from "../features/employee-poll/employeePollSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [auth]: authReducer,
    [employeePollName]: employeePollReducer
  }
});
