"use client";

import React from "react";
import LogInRegistrationPart from "./LogInRegistrationPart";
import UserButton from "./UserButton";
import { useContext } from "react";
import { userContext } from "@/app/context/ContextAPI";
import HomeIcon from '@mui/icons-material/Home';
import styles from "./navbarStyles.module.scss";
import Link from "next/link";

const NavbarCustom = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <div className={styles.cont}>
      <div >
        <Link href={'/'} className={styles.home}><HomeIcon/><p>Home</p></Link>
        </div>
      <div className={styles.content}>
        {user.isLogin ? <UserButton /> : <LogInRegistrationPart />}
      </div>
    </div>
  );
};

export default NavbarCustom;
