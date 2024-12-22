/** @format */

import React from "react";
import "./footer.css";
import logoimg from "../../assets/images/logo.png";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="container">
      <div className="Left">
        <div id="logo">
          <img id="img" src={logoimg} alt="" />
        </div>
        <div id="content">
          {" "}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, esse
            ipsum? Quas delectus quisquam est id voluptates placeat? Cupiditate
            necessitatibus voluptatem nesciunt illo repellat atque iste. In,
            libero. Dicta, perspiciatis!
          </p>
        </div>
        <div id="social">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="iconStyle"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "24px" }}
              />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="iconStyle"
            >
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "24px" }} />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="iconStyle"
            >
              <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "24px" }} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="iconStyle"
            >
              <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="div">
          {/* Company Section */}
          <div id="links">
            <h4 className="head1">Company</h4>
            <div>
              <a className="link-item" href="#about">
                About Us
              </a>
            </div>
            <div>
              <a className="link-item" href="#services">
                Our Services
              </a>
            </div>
            <div>
              <a className="link-item" href="#careers">
                Careers
              </a>
            </div>
            <div>
              <a className="link-item" href="#blog">
                Blog
              </a>
            </div>
            <div>
              <a className="link-item" href="#testimonial">
                Testimonial
              </a>
            </div>
            <div>
              <a className="link-item" href="#contact">
                Contact Us
              </a>
            </div>
          </div>

          {/* Resources Section */}
          <div id="links">
            <h4 className="head1">Resources</h4>
            <div>
              <a className="link-item" href="#tools">
                Fitness Tools
              </a>
            </div>
            <div>
              <a className="link-item" href="#videos">
                Workout Videos
              </a>
            </div>
            <div>
              <a className="link-item" href="#guides">
                Nutrition Guides
              </a>
            </div>
            <div>
              <a className="link-item" href="#faq">
                FAQ
              </a>
            </div>
            <div>
              <a className="link-item" href="#stories">
                Success Stories
              </a>
            </div>
            <div>
              <a className="link-item" href="#membership">
                Membership
              </a>
            </div>
          </div>

          {/* Programs Section */}
          <div id="links">
            <h4  className="head1">Programs</h4>
            <div>
              <a className="link-item" href="#weight">
                Weight Loss
              </a>
            </div>
            <div>
              <a className="link-item" href="#muscles">
                Building Muscles
              </a>
            </div>
            <div>
              <a className="link-item" href="#homeworkout">
                Home Workout
              </a>
            </div>
            <div>
              <a className="link-item" href="#gymplan">
                Gym Plan
              </a>
            </div>
            <div>
              <a className="link-item" href="#plans">
                Our Plans
              </a>
            </div>
            <div>
              <a className="link-item" href="#fitnessgroup">
                Fitness Group
              </a>
            </div>
          </div>
        </div>

        <div id="contact">
          <h2 id="head2">Contacts</h2>

          {/* Location Icon */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationArrow} className="contactStyle" />
            <span>123 Fitness St, Health City</span>
          </div>

          {/* Phone Icon */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contactStyle" />
            <span>+1 234 567 890</span>
          </div>

          {/* Mail Icon */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contactStyle" />
            <span>info@fitnessclub.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
