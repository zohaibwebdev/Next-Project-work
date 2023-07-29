"use client";
import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <Link href="/" className={style.logo}>
        Zohaib
      </Link>
      <div className={style.links}>
        <DarkModeToggle />
        <Link className={style.link} href="/portfolio">
          Portfolio
        </Link>
        <Link className={style.link} href="/blog">
          Blog
        </Link>
        <Link className={style.link} href="/about">
          About
        </Link>
        <Link className={style.link} href="/contact">
          Contact
        </Link>

        <Link className={style.link} href="/dashboard">
          Dashboard
        </Link>
        <button className={style.logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
