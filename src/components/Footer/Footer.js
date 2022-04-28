import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer d-flex flex-column justify-content-center align-items-center p-5">
      <div className="footer-logo">
        <div className="social-logo">©2022 by codermother</div>
      </div>
      <div>
        <Link className="social-icon-link " to="//github.com/codermother/">
          <GitHub />
        </Link>
        <Link className="social-icon-link" to="//www.instagram.com/ozgecsknn/">
          <InstagramIcon />
        </Link>
        <Link className="social-icon-link twitter" to="//twitter.com/oskee3">
          <TwitterIcon />
        </Link>
        <Link
          className="social-icon-link"
          to="//www.linkedin.com/in/%C3%B6zge-co%C5%9Fkun-g%C3%BCrsucu-28380987/"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
