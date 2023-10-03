"use client";

import React, { ReactNode } from "react";
import NavbarCustom from "@/components/navbar/Navbar";
import { useState } from "react";
import { userContext } from "./api/context/ContextAPI";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {

  const [ user, setUser ] = useState({ email: "", password: "" });
  
  return (
    <userContext.Provider value={{user, setUser}}>
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
