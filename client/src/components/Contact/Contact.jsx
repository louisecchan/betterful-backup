import React from "react";
import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="mail">
          <span>Sign up for email updates and promotions</span>
          <input type="text" id="text" placeholder="Email address" />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
        <div className="icons">
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
          <InstagramIcon className="icon" />
          <YouTubeIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
