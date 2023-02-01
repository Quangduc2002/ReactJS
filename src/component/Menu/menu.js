import { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import "./Menu.css";
function Menu() {
  const tabs = [
    {
      name: "HOME",
      icon: "fa-solid fa-house-chimney",
      href: "/",
    },
    {
      name: "ABOUT",
      icon: "fa-solid fa-user",
      href: "/About",
    },
    {
      name: "CONTACT",
      icon: "fa-solid fa-comments",
      href: "/Contact",
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <div className={clsx(styles.menu, styles.c_3)}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className={clsx(styles.bar)}
      >
        <i
          className={clsx(styles.fa_bars, styles.fa_solid, "fa-solid fa-bars")}
        />
      </div>
      {show && (
        <ul className={clsx(styles.ul)}>
          <li
            onClick={() => {
              setShow(!show);
            }}
            className={clsx(styles.li)}
          >
            <i
              className={clsx(
                styles.fa_xmark,
                styles.fa_solid,
                "fa-solid fa-xmark"
              )}
            />
          </li>

          {tabs.map((e) => (
            <NavLink
              onClick={() => {
                setShow(!show);
              }}
              className={clsx(styles.link)}
              to={e.href}
            >
              <i className={clsx(styles.fa_solid, e.icon)} />
              <span
              // style={
              //   type === e.name
              //     ? {
              //         color: "#2196f3",
              //       }
              //     : {}
              // }
              >
                {e.name}
              </span>
            </NavLink>
          ))}
        </ul>
      )}
      {show && (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={clsx(styles.model)}
        />
      )}
    </div>
  );
}
export default Menu;
