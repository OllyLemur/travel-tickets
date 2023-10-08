"use client";

import React from "react";
import LogInRegistrationPart from "./LogInRegistrationPart";
import UserButton from "./UserButton";
import { useContext } from "react";
import { userContext } from "@/app/context/ContextAPI";

import styles from "./navbarStyles.module.scss";

const NavbarCustom = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <div className={styles.cont}>
      <div className={styles.content}>
        {user.isLogin ? <UserButton /> : <LogInRegistrationPart />}
      </div>
    </div>
  );
};

export default NavbarCustom;
