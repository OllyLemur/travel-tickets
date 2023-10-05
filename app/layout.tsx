"use client";

import React, { ReactNode, useEffect, useContext } from "react";
import NavbarCustom from "@/components/navbar/Navbar";
import { useState } from "react";
import { userContext } from "./context/ContextAPI";
import { userAuth } from "@/utils/proxy";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const [user, setUser] = useState({ email: "", password: "", isLogin: false });

  useEffect(() => {
    const getData = async () => {
      const data = await userAuth();
      const isLogin = data.user.data.isLogin === "false" ? false : true;

      //@ts-ignore
      setUser({ ...user, isLogin, ...data.user.data.user });
    };
    getData();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <html lang="en">
        <body>
          <NavbarCustom />
          <main className="app">{props.children}</main>
        </body>
      </html>
    </userContext.Provider>
  );
};

export default RootLayout;
