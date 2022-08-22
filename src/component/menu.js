import { useState } from "react";
import { Link } from "react-router-dom";
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
  console.log(type);
  return (
    <div className="menu c-3 ">
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="menu__bar js-bars"
      >
        <i className="fa-solid fa-bars" />
      </div>
      {show && (
        <ul className="menu__ul js-menu">
          <li
            onClick={() => {
              setShow(!show);
            }}
            className="menu__li js-close close"
          >
            <i className="fa-solid fa-xmark" />
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
              className="menu__link"
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
          className="model js-model"
        />
      )}
    </div>
  );
}
export default Menu;
