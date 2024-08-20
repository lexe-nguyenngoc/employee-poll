import React from "react";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout, selectCurrentUser } from "../../../auth/authSlice";

import userAvt from "../../../../assets/images/user_avt.png";

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
  const dispatch = useDispatch();

  const activatedNavItem = NAV[match.pathname];

  const handleLogoutClick = () => {
    dispatch(logout());
  };

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
      {activatedNavItem && (
        <div
          className={cx("nav__highlighter")}
          style={{
            left: `${activatedNavItem.position * NAV_ITEM_WIDTH}px`
          }}
        ></div>
      )}

      <div className={cx("nav__user-action")}>
        <div className={cx("nav__user")}>
          <img src={currentUser.avatarURL || userAvt} alt={currentUser.name} />
          <p>{currentUser.name}</p>
        </div>

        <button className={cx("nav__btn")} onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
