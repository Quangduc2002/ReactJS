import React, { Component } from "react";
import Logo from "./images/logo.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="content ">
        <div className=" home " style={{ height: "100%" }}>
          <div className="img active" />
          <div id="home">
            <div className="content__image">
              <img src={Logo} alt="" />
            </div>
            <div className="content__text">
              <h3>Hi there !</h3>
              <h1>
                I'm
                <span class="blue">a</span>
                <span class="blue">web</span>
                <span class="blue">designer</span>
              </h1>
              <p>
                I'm a Freelance UI/UX Designer and Developer based . I strives
                to build immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>
              <div className="content__button">
                <button className="content__link content__link-home button__link">
                  <Link to={"/About"}>
                    <i style={{ color: "#fff" }} className="fa-solid fa-user" />
                    <span style={{ color: "#fff" }}>more about me</span>
                  </Link>
                </button>
                <button className="content__link content__link-home content__link1 button__link button__link1 l-0">
                  <Link to={"/Contact"}>
                    <i className="fa-solid fa-comments content__i" />
                    <span className="content__span">contact</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
