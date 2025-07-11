"use client";

import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../theme/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Logo from "/public/logo2.png"
import Image from "next/image";


const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src={Logo} alt="" width={100} height={100} />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {Links.map((link) => {
          return (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button onClick={signOut} className={styles.logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
