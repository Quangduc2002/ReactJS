import React, { Component } from "react";
import Logo from "../../images/logo.jpg";

class About extends Component {
  render() {
    return (
      <div className="content ">
        <div id="about" className="tab-pane tab-pane1">
          <div className="about__title">
            <h1>
              ABOUT <span>ME</span>
            </h1>
            <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
          </div>
          <div className="about__content">
            <div className="about__image ">
              <img src={Logo} alt="" />
            </div>
            <div className="about__self1 ">
              <div className>
                <div className="about__self2 ">
                  <div className="about__self ">
                    <ul className="about__self-ul">
                      <li className="about__self-li">
                        <p>Full Name:</p> Phạm Quang Đức
                      </li>
                      <li className="about__self-li">
                        <p>Birthdate:</p> 22/12/2002
                      </li>
                      <li className="about__self-li">
                        <p>Sex:</p> Nam
                      </li>
                      <li className="about__self-li">
                        <p>Address:</p> Hà Nội
                      </li>
                    </ul>
                  </div>
                  <div className="about__self col-xl-6  col-md-5">
                    <ul className="about__self-ul">
                      <li className="about__self-li self__li">
                        <p>Freelance:</p> Available
                      </li>
                      <li className="about__self-li">
                        <p>Phone:</p> 0965420922
                      </li>
                      <li className="about__self-li email">
                        <p>Email:</p> phamquangduc110@gmail.com
                      </li>
                      <li className="about__self-li">
                        <p>Nationality:</p> Việt Nam
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button className="content__link">
                    <i
                      style={{ color: "#fff" }}
                      className="fa-solid fa-download"
                    />
                    <span style={{ color: "#fff" }}>download my cv</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
