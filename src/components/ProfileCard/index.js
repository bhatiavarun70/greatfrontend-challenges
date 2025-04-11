import React from "react";
import "./profileCard.css";
import profileImage from "../../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      <div className="user-profile-section">
        <div className="user-image-section">
          <img className="user-image" src={profileImage} alt="user-image" />
        </div>
        <div className="user-details-section">
          <h2 className="user-name">Sarah Dole</h2>
          <p className="user-designation">Front End Engineer @ Mircosoft</p>
        </div>
        <div className="user-description-section">
          <p className="user-description">
            I turn coffee into bugs which are fixed by someone else. Cetified
            Stack Overflow and ChatGPT developer
          </p>
        </div>
      </div>
      <div className="user-contact-section">
        <button className="contact-button">Contact me</button>
        <div className="social-icons-section">
          <button className="social-icon-container">
            <FaGithub className="social-icon" />
          </button>
          <button className="social-icon-container">
            <FaLinkedin className="social-icon" />
          </button>
          <button className="social-icon-container">
            <AiFillInstagram className="social-icon" />
          </button>
          <button className="social-icon-container">
            <FaXTwitter className="social-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
