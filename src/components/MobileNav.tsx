import React, { useState, useEffect, useRef } from "react";
import CartIcon from "./CartIcon";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/Context";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { CurrentUser } from "../model";
import "../Styles/MobileNav/mobilenav.scss";
import { useAppDispatch } from "../helper/appDispatch";
import { logOut } from "../redux/actions/user";
import Logo from "./Logo";

const MobileNav = () => {
  const User: CurrentUser | null = useSelector(
    (state: State) => state.user.currentUser
  );
  const { setMobileNavModal, setCartModal } = useGlobalContext();
  const [noUserDropdown, setNoUserDropdown] = useState<boolean>(false);
  const [userDropdown, setUserDropdown] = useState<boolean>(false);

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setUserDropdown(false);
        setNoUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const dispatch = useAppDispatch();

  const letter = User?.username.charAt(0).toUpperCase();
  return (
    <nav className="mobilenav">
      <Link to="/">
        <Logo />
      </Link>
      <div className="mobilenav-icons">
        {User && (
          <div className="account" ref={menuRef}>
            <div className="letter-container">
              <p
                className="letter"
                onClick={() => setUserDropdown(!userDropdown)}
              >
                {letter}
              </p>
            </div>
            {userDropdown && (
              <ul className="dropdown">
                <Link to="/profile">
                  <li>Profile</li>
                </Link>
                <li onClick={() => dispatch(logOut())}>Log Out</li>
              </ul>
            )}
          </div>
        )}
        {!User && (
          <div className="account" ref={menuRef}>
            <div className="text-wrapper">
              <h4
                className="icon"
                onClick={() => setNoUserDropdown(!noUserDropdown)}
              >
                Account
              </h4>
            </div>
            {noUserDropdown && (
              <ul className="dropdown">
                <Link to="/register">
                  <li>Register</li>
                </Link>
                <Link to="/login">
                  <li>Login</li>
                </Link>
              </ul>
            )}
          </div>
        )}

        <h3 className="icon" onClick={() => setCartModal(true)}>
          <CartIcon />
        </h3>
        <h2 className="icon" onClick={() => setMobileNavModal(true)}>
          <FaBars />
        </h2>
      </div>
    </nav>
  );
};

export default MobileNav;
