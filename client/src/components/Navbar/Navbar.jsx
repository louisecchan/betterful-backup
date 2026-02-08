import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import "./navbar.scss";
import { Hamburger } from "./Hamburger";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeMobileMenu = () => setIsNavExpanded(false);

  // hamburger
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isNavExpanded]);

  // cart
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="navbar">
      <h1
        id="shopname-mobilenav"
        className="text-fade-up"
        onClick={closeMobileMenu}
      >
        BETTERFUL
      </h1>
      <div
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <div className="nav-group nav-left">
            <li>
              <Link
                className="sale link un"
                to="/underconstruction"
                onClick={closeMobileMenu}
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                className="link un"
                to="/products/1"
                onClick={closeMobileMenu}
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                className="link un"
                to="/products/2"
                onClick={closeMobileMenu}
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                className="link un"
                to="/products/3"
                onClick={closeMobileMenu}
              >
                Wellness
              </Link>
            </li>
          </div>

          <li className="logo-item">
            <Link className="link" id="shop-name" to="/">
              BETTERFUL
            </Link>
          </li>

          {/* fake link - act like a placeholder on navbar haha */}
          <li className="shop-nameM-item">
            <Link className="shop-nameM" to="/" onClick={closeMobileMenu}>
              BETTERFUL
            </Link>
          </li>

          <div className="nav-group nav-right">
            <li>
              <Link
                className="link un story"
                to="/story"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link un"
                to="/stores"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  navigate("/stores");
                }}
              >
                Stores
              </Link>
            </li>
            <li>
              <Link className="link un" to="/login" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link className="link un" to="/register" onClick={closeMobileMenu}>
                Register
              </Link>
            </li>
            <li className="icons">
              <Link className="cartIcon" onClick={() => setOpen(!open)}>
                <WorkOutlineIcon className="muiIcons" />
                <span>{products.length}</span>
              </Link>
            </li>
            <li className="iconsM">
              <Link className="cartText un" onClick={() => setOpen(!open)}>
                <span>Shopping Bag</span>
              </Link>
            </li>
          </div>
        </ul>

        {open && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
