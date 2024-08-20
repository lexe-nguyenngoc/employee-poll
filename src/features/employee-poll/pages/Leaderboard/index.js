import classNames from "classnames/bind";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsersThunk } from "../../asyncActions";
import { selectUsers } from "../../employeePollSlice";

import Container from "../../../../components/Container";
import User from "../../components/User";

import styles from "./Leaderboard.module.scss";

const cx = classNames.bind(styles);

const Leaderboard = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(users);

  const transformedUsers = useMemo(() => {
    if (!users) return [];

    return Object.values(users).sort(
      (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
    );
  }, [users]);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <Container className={cx("leaderboard")}>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {transformedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <User user={user} />
              </td>
              <td style={{ width: "150px" }}>
                {Object.keys(user.answers).length}
              </td>
              <td style={{ width: "150px" }}>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Leaderboard;
