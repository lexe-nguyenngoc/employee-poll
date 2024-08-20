import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import userAvt from "../../../../assets/images/user_avt.png";
import { selectCurrentUser } from "../../../auth/authSlice";
import { Button } from "../../../../components/forms";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

const NAV = {
  "/": {
    id: 1,
    label: "Home",
    href: "/",
    position: 0
  },
  "/leader-board": {
    id: 2,
    label: "Leaderboard",
    href: "/leader-board",
    position: 1
  },
  "/new": {
    id: 3,
    label: "New",
    href: "/new",
    position: 2
  }
};
const NAV_ITEM_WIDTH = 150;

const navList = Object.values(NAV);

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);
  const match = useLocation();

  const activatedNavPosition = NAV[match.pathname];

  return (
    <nav className={cx("nav")}>
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.href} className={cx("nav__link")}>
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={cx("nav__highlighter")}
        style={{
          left: `${activatedNavPosition.position * NAV_ITEM_WIDTH}px`
        }}
      ></div>

      <div className={cx("nav__user-action")}>
        <div className={cx("nav__user")}>
          <img src={currentUser.avatarURL || userAvt} alt={currentUser.name} />
          <p>{currentUser.name}</p>
        </div>

        <button className={cx("nav__btn")}>Logout</button>
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
