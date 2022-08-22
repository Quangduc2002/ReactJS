import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="content ">
        <div id="contact" className="tab-pane tab-pane1">
          <div className="about__title contact__title">
            <h1>
              GET <span>IN TOUCH</span>
            </h1>
            <p>
              I'M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
            </p>
          </div>
          <div className="contact__container">
            <div className="contact__left c-3 m-12">
              <ul className="contact__ul">
                <li className="contact__li">
                  <p>Phone</p>
                  <div className="contact__content">
                    <i className="fa-brands fa-whatsapp" />
                    <span>0965420922</span>
                  </div>
                </li>
                <li className="contact__li">
                  <p>Email</p>
                  <div className="contact__content">
                    <i className="ti-email" />
                    <span>phamquangduc110@gmail.com</span>
                  </div>
                </li>
                <li className="contact__li">
                  <p>Instagram</p>
                  <div className="contact__content">
                    <i className="ti-instagram" />
                    <span>Duc.202</span>
                  </div>
                </li>
                <li className="contact__li">
                  <p className="contact__li-title">Social Profiles</p>
                  <div className="contact__content">
                    <a
                      className="contact__content-link"
                      href="https://www.facebook.com/cau.chu.54922169/"
                    >
                      <i className="ti-facebook Profiles" />
                    </a>
                    <a className="contact__content-link" href="#contact">
                      <i className="ti-twitter-alt Profiles" />
                    </a>
                    <a
                      className="contact__content-link"
                      href="https://github.com/Quangduc2002"
                    >
                      <i className="fa-brands fa-github Profiles" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact__form c-9 m-12 s-12">
              <p className="contact__form-title">
                If you have any suggestion, project or even you want to say
                Hello... please fill out the form below and I will reply you
                shortly.
              </p>
              <form className="auth__form" id="form">
                <div className="auth-form__froup">
                  <div className="auth-form__froup1 c-5 s-12">
                    <i className="fa-solid fa-user auth-form-icon" />
                    <input
                      id="name"
                      name="name"
                      className="auth-form__input"
                      type="text"
                      placeholder="YOUR NAME"
                    />
                    <p className="form-message" />
                  </div>
                  <div className="auth-form__froup1 c-5 s-12">
                    <i className="ti-email auth-form-icon" />
                    <input
                      id="email"
                      name="email"
                      className="auth-form__input"
                      type="text"
                      placeholder="YOUR EMAIL"
                    />
                    <p className="form-message" />
                  </div>
                </div>
                <div className="auth-form__froup1">
                  <i className="fa-solid fa-comments comments" />
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-control"
                    rows={7}
                    placeholder="YOUR MESSAGE"
                    defaultValue={""}
                  />
                  <p className="form-message" />
                </div>
                <div>
                  <button className="content__link">
                    <i className="fa-solid fa-paper-plane" />
                    <span style={{ color: "#fff" }}> Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
