import React from "react";
import styles from "./NavbarList.module.css";

import { NavLink, withRouter } from "react-router-dom";

const NavbarList = () => {
  const pages = [
    {
      page: "Homepage",
      path: "/",
      name: "homepage",
      key: "navHome"
    },
    {
      page: "Mint Gallery",
      path: "/gallery",
      name: "gallery",
      key: "navGallery"
    },
    {
      page: "Mint Services",
      path: "/services",
      name: "services",
      key: "navServices"
    },
    {
      page: "About Alice",
      path: "/about",
      name: "about",
      key: "navAbout"
    },
    {
      page: "Contact Mint",
      path: "/contact",
      name: "contact",
      key: "navContact"
    },
    {
      page: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-cart"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      path: "/ordering/basket",
      name: "basket",
      key: "navBasket"
    }
  ];

  return (
    <ul className={styles.list}>
      {pages.map((item, _) => (
        <li className={styles.listContent} key={item.key}>
          <NavLink to={item.path} exact activeClassName={styles.active}>
            {item.page}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(NavbarList);
