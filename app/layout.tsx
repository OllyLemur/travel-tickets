"use client";

import React, { ReactNode, useEffect, useContext } from "react";
import NavbarCustom from "@/components/navbar/Navbar";
import { useState } from "react";
import { userContext, flightsContext } from "./context/ContextAPI";
import { userAuth } from "@/utils/proxy";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const [user, setUser] = useState({ email: "", password: "", isLogin: false });
  const [flights, setFlights] = useState({});

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
    <flightsContext.Provider value={{ flights, setFlights }}>
      <userContext.Provider value={{ user, setUser }}>
        <html lang="en">
          <body>
            <NavbarCustom />
            <main className="app">{props.children}</main>
          </body>
        </html>
      </userContext.Provider>
    </flightsContext.Provider>
  );
};

export default RootLayout;
