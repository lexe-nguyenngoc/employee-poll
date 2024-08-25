import classNames from "classnames/bind";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

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
  "/leaderboard": {
    id: 2,
    label: "Leaderboard",
    href: "/leaderboard",
    position: 1
  },
  "/add": {
    id: 3,
    label: "New",
    href: "/add",
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

  if (!currentUser) return <></>;

  return (
    <nav className={cx("nav")}>
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <NavLink
              to={nav.href}
              className={({ isActive }) =>
                cx("nav__link", { active: isActive })
              }
            >
              {nav.label}
            </NavLink>
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
