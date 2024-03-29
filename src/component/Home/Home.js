import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={clsx(styles.content)}>
      <div className={clsx(styles.home)} style={{ height: "100%" }}>
        <div className={clsx(styles.img)} />
        <div id={clsx(styles.home)}>
          <div className={clsx(styles.image)}>
            <div className={clsx(styles.image_img)} />
          </div>
          <div className={clsx(styles.text)}>
            <h3>Hi there !</h3>
            <h1>
              I'm
              <span className={clsx(styles.blue)}>a</span>
              <span className={clsx(styles.blue)}>web</span>
              <span className={clsx(styles.blue)}>designer</span>
            </h1>
            <p>
              I'm a Freelance UI/UX Designer and Developer based . I strives to
              build immersive and beautiful web applications through carefully
              crafted code and user-centric design.
            </p>
            <div className={clsx(styles.button)}>
              <button
                className={clsx(
                  styles.button__link,
                  styles.link,
                  styles.link_home
                )}
              >
                <Link to={"/About"}>
                  <i
                    style={{ color: "#fff" }}
                    className={clsx(styles.solid, "fa-solid fa-user")}
                  />
                  <span style={{ color: "#fff" }}>more about me</span>
                </Link>
              </button>
              <button
                className={clsx(
                  styles.button__link,
                  styles.link,
                  styles.link_home,
                  styles.button__link1,
                  styles.link1,
                  styles.l_0
                )}
              >
                <Link to={"/Contact"}>
                  <i
                    className={clsx(
                      styles.solid,
                      styles.i,
                      "fa-solid",
                      "fa-comments"
                    )}
                  />
                  <span className={clsx(styles.span)}>contact</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
