import { Link, NavLink } from "react-router";
import cartIcon from "../../assets/icon/notification-cart.png";
import logo from "../../assets/images/logo.png";
import ThemeToggle from "./ThemeToggler";

export const NavBar = () => {
  const getNavLinkClass = ({ isActive }) =>
    `text-white bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent focus:text-yellow-500 active:text-yellow-500 ${
      isActive ? "font-semibold text-yellow-500 underline" : ""
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={getNavLinkClass}>
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={getNavLinkClass}>
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className={getNavLinkClass}>
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className={getNavLinkClass}>
          OUR SHOP
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={cartIcon}
            alt="cart icon"
          />
          <span className="badge badge-sm">99+</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="h-20 fixed z-10 top-0 left-0 w-full">
      <div className="navbar bg-black/50 flex justify-center items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-52 h-20 object-cover" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex items-center menu-horizontal px-1">{navLinks}</ul>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
