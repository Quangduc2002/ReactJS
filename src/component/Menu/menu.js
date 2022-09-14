import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
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
function Menu() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("HOME");
  return (
    <div className={clsx(styles.menu, "c-3")}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className={clsx(styles.bar)}
      >
        <i className={clsx("fa-solid", "fa-bars")} />
      </div>
      {show && (
        <ul className={clsx(styles.ul)}>
          <li
            onClick={() => {
              setShow(!show);
            }}
            className={clsx(styles.li)}
          >
            <i className={clsx("fa-solid", "fa-xmark")} />
          </li>

          {tabs.map((e) => (
            <Link
              onClick={() => {
                setType(e.name);
                setShow(!show);
              }}
              style={
                type === e.name
                  ? {
                      color: "#2196f3",
                    }
                  : {}
              }
              className={clsx(styles.link)}
              to={e.href}
            >
              <i
                style={
                  type === e.name
                    ? {
                        color: "#2196f3",
                        borderRight: "4px solid #2196f3",
                      }
                    : {}
                }
                className={e.icon}
              />
              <span
                style={
                  type === e.name
                    ? {
                        color: "#2196f3",
                      }
                    : {}
                }
              >
                {e.name}
              </span>
            </Link>
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
