import React, { useRef, useEffect } from "react";
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
import { setShowCart } from "../../store/actions/shoppingCartActions";

const HeaderLogin = () => {
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const showCart = useSelector((state) => state.shoppingCart.showCart);
  const history = useHistory();
  const dispatch = useDispatch();
  const cartRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser()); // Redux'taki oturumu sonlandır
    history.push("/login");
  };

  const toggleCart = () => {
    dispatch(setShowCart(!showCart));
  };

  const handleClickOutside = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      !event.target.closest(".cart-toggle") &&
      !event.target.closest(".cart-button")
    ) {
      dispatch(setShowCart(false));
    }
  };

  const handleBasketRedirect = (event) => {
    event.stopPropagation();
    history.push("/basket");
  };

  const handleOrderRedirect = (event) => {
    event.stopPropagation();
    console.log("Redirecting to /order");
    history.push("/order");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

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
                <span className="ml-1 text-sm font-semibold">
                  {user.name} /
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center md:text-[#23A6F0]"
              >
                <FontAwesomeIcon icon={farUser} size="xs" />
                <span className="ml-1 text-sm font-bold">Login /</span>
              </Link>
            )}
            {!user?.name ? (
              <Link
                to="/register"
                className="hidden md:flex items-center md:text-[#23A6F0]"
              >
                <span className="ml-1 text-sm font-bold">Register</span>
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
          <div className="relative">
            <a
              href="#"
              className="text-[#252B42] md:text-[#23A6F0] flex items-center cart-toggle"
              onClick={toggleCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} size="sm" />
              <span className="hidden md:inline ml-1 text-xs">
                {cartItemCount}
              </span>
            </a>
            {showCart && (
              <div
                ref={cartRef}
                className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
              >
                {cart.length === 0 ? (
                  <p className="text-sm">Sepetiniz şu an için boş</p>
                ) : (
                  <div>
                    <div className="mb-2">
                      <p className="font-bold text-sm">
                        Sepetim ({cartItemCount} Ürün)
                      </p>
                    </div>
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex justify-between mb-2"
                      >
                        <div>
                          <p className="font-bold text-sm">
                            {item.product.name}
                          </p>
                          <p className="text-sm">
                            ${item.product.price} x {item.count}
                          </p>
                        </div>
                        <img
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    ))}
                    <div className="flex justify-between mt-4 gap-4">
                      <button
                        className="bg-gray-200 text-black rounded-lg px-4 py-2 font-bold text-sm cart-button"
                        onClick={handleBasketRedirect}
                      >
                        Sepete Git
                      </button>
                      <button
                        className="bg-[#23A6F0] text-white rounded-lg px-4 py-2 font-bold text-sm cart-button"
                        onClick={handleOrderRedirect}
                      >
                        Siparişi Tamamla
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
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
