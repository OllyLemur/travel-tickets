"use client";

import React from "react";
import LogInRegistrationPart from "./LogInRegistrationPart";
import UserButton from "./UserButton";
import { useContext } from "react";
import { userContext } from "@/app/context/ContextAPI";

const NavbarCustom = () => {
  const { user, setUser } = useContext(userContext);

  return <div>{user.isLogin ? <UserButton /> : <LogInRegistrationPart />}</div>;
};

export default NavbarCustom;
