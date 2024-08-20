import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./User.module.scss";
import { generateUserAvt } from "../../../../utils";

const cx = classNames.bind(styles);

const User = ({ user, className }) => {
  return (
    <div className={cx(className, "user")}>
      <img src={generateUserAvt(user.avatarURL)} alt={user.name} />
      <div className={cx("user__info")}>
        <p className={cx("user__name")}>
          <b>{user.name}</b>
        </p>
        <p className={cx("user__id")}>{user.id}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default User;
