import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="/products/1" className="link">
            Beauty
          </Link>
          <Link to="/products/2" className="link">
            Fashion
          </Link>
          <Link to="/products/3" className="link">
            Wellness
          </Link>
          <Link to="/underconstruction" className="link">
            Sale
          </Link>
          <span className="dummy-url">New Arrivals</span>
        </div>
        <div className="item">
          <h1>Customer Care</h1>
          <span className="dummy-url">Track An Order</span>
          <span className="dummy-url">Create A Return</span>
          <span className="dummy-url">FAQs</span>
          <span className="dummy-url">Delivery</span>
          <span className="dummy-url">Privacy Policy</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p className="about-desc">
            BETTERFUL is a destination of discovery for all genders – a place to
            be inspired, to find connection and to explore all aspects of a
            stylish life. With a selection of more than 500 of the world's most
            sought-after brands, we're on a mission to provide men with
            everything they need to look their best, and through our content and
            community offering we're helping them to feel their best, too.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            For any enquiries please contact us.
            <br /> We're available 24 hours, 7 days a week. <br /> <br />
            Email us at{" "}
            <a href="mailto:customercare@betterful.com" className="email">
              customercare@betterful.com
            </a>
            <br />
            <br />
            Call us on <span className="phone-number">0800 088 6808</span>
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">BETTERFUL </span>
          <span className="copyright">
            © {new Date().getFullYear()} betterful.com
          </span>
        </div>
        <div className="right">
          {/* <img src="/img/payment.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
