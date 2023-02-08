import React, { Component } from "react";
import clsx from "clsx";
import styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={clsx(styles.content)}>
        <div id={clsx(styles.about)}>
          <div className={clsx(styles.title)}>
            <h1>
              ABOUT <span>ME</span>
            </h1>
            <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
          </div>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.image)}>
              <div className={clsx(styles.image_img)} />
            </div>
            <div className={clsx(styles.self1)}>
              <div className>
                <div className={clsx(styles.self2)}>
                  <div>
                    <ul className={clsx(styles.self_ul)}>
                      <li className={clsx(styles.self_li)}>
                        <p>Full Name:</p> Phạm Quang Đức
                      </li>
                      <li className={clsx(styles.self_li)}>
                        <p>Birthdate:</p> 22/12/2002
                      </li>
                      <li className={clsx(styles.self_li)}>
                        <p>Sex:</p> Nam
                      </li>
                      <li className={clsx(styles.self_li)}>
                        <p>Address:</p> Hà Nội
                      </li>
                    </ul>
                  </div>
                  <div className={clsx(styles.self)}>
                    <ul className={clsx(styles.self_ul)}>
                      <li className={clsx(styles.self_li, styles.self__li)}>
                        <p>Freelance:</p> Available
                      </li>
                      <li className={clsx(styles.self_li)}>
                        <p>Phone:</p> 0965420922
                      </li>
                      <li className={clsx(styles.self_li, "email")}>
                        <p>Email:</p> phamquangduc110@gmail.com
                      </li>
                      <li className={clsx(styles.self_li)}>
                        <p>Nationality:</p> Việt Nam
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button className={clsx(styles.link)}>
                    {/* <i
                      style={{ color: "#fff" }}
                      className={clsx(styles.fa_solid, "fa-solid fa-download")}
                    /> */}
                    <a
                      className={clsx(styles.content_link)}
                      href="https://drive.google.com/file/d/1unqNBaNyVKlKR5bj8L1ZBDBRafh-c0e6/view"
                      style={{ padding: "14px 20px" }}
                    >
                      <span style={{ color: "#fff" }}>my cv</span>
                    </a>
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
