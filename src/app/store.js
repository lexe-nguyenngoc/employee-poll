import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer, {
  ROOT_STATE_NAME as auth
} from "../features/auth/authSlice";
import employeePollReducer, {
  ROOT_STATE_NAME as employeePollName
} from "../features/employee-poll/employeePollSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     [auth]: authReducer,
//     [employeePollName]: employeePollReducer
//   }
// });

const rootReducer = combineReducers({
  [auth]: authReducer,
  [employeePollName]: employeePollReducer
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export const store = setupStore();
