import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen((prev) => !prev);
  };
  console.log(open);

  return (
    <header className="navbar container">
      <nav>
        <div className="nav__logo uppercase">
          <h2>Audiophile</h2>
        </div>
        <div className="nav__items">
          {/* nav links for medium to large screen */}

          <div className="nav__links-md">
            <div className="nav__link uppercase">
               <Link to="/" className="link"><p >Home</p></Link>
            </div>
            <div className="nav__link uppercase">
              <Link to="/headphones" className="link"><p >Headphones</p></Link>
            </div>
            <div className="nav__link uppercase">
              <Link to="/speakers" className="link"><p >Speakers</p></Link>
            </div>
            <div className="nav__link uppercase">
              <Link to="/earphones" className="link"><p >earphones</p></Link>
            </div>
            <div className="nav__icon">
              <div className="cart">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.8rem"
                >
                 <path
                    fill="#ffffff"
                    d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* nav links for small screen */}
          <div className="nav__links-sm">
            <div className="hamburger__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="3rem"
                onClick={handleNavbar}
              >
                <path
                  fill="#D4CECE"
                  d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
                />
              </svg>
            </div>
            <div className={`dropdown-sm ${open ? "open" : "close"}`}>
              <div className="nav__link-sm uppercase">
                <Link to="/" className="link"><p >Home</p></Link>
              </div>
              <div className="nav__link-sm uppercase">
                <Link to="/headphones" className="link"><p >Headphones</p></Link>
              </div>
              <div className="nav__link-sm uppercase">
                <Link to="/speakers" className="link"><p >Speakers</p></Link>
              </div>
              <div className="nav__link-sm uppercase">
                <Link to="/earphones" className="link"><p >earphones</p></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
