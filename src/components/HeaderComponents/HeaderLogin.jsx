import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faUser as farUser,
} from "@fortawesome/free-regular-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { logoutUser } from "../../store/thunks/authThunks";

const HeaderLogin = () => {
  const user = useSelector((state) => state.client.user);
  console.log(user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()); // Redux'taki oturumu sonlandır
    history.push("/login");
  };

  return (
    <div>
      <div className="flex items-center justify-end font-sans">
        <div className="flex items-center space-x-6">
          <div className="md:flex md:items-center md:flex-wrap">
            {user?.name ? (
              <div className="flex items-center md:text-[#23A6F0]">
                <img
                  src={gravatar.url(user.email, {
                    s: "100",
                    r: "pg",
                    d: "identicon",
                  })}
                  alt={user.name}
                  className="rounded-full w-6 h-6 mr-1"
                />
                <span className="ml-1 font-semibold">{user.name} /</span>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center md:text-[#23A6F0]"
              >
                <FontAwesomeIcon icon={farUser} size="xs" />
                <span className="ml-1 font-bold text-sm">Login /</span>
              </Link>
            )}
            {!user?.name ? (
              <Link
                to="/register"
                className="hidden md:flex items-center md:text-[#23A6F0]"
              >
                <span className="ml-1 font-bold text-sm">Register</span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center md:text-[#23A6F0] cursor-pointer ml-1"
              >
                Logout
              </button>
            )}
          </div>
          <a href="#" className="text-[#252B42] md:text-[#23A6F0]">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
          </a>
          <a
            href="#"
            className="text-[#252B42] md:text-[#23A6F0] flex items-center"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="sm" />
            <span className="hidden md:inline ml-1 text-xs">1</span>
          </a>
          <a href="#" className="hidden md:flex items-center md:text-[#23A6F0]">
            <FontAwesomeIcon icon={farHeart} size="sm" />
            <span className="ml-1 text-xs">1</span>
          </a>
          <a href="#" className="md:hidden items-center text-[#252B42]">
            <FontAwesomeIcon icon={faBars} size="sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
