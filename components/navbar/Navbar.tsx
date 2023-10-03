"use client";

import React from "react";
import ModalLogIn from "../logInModal/modal/ModalLogIn";
import ModalRegistration from "../registrationModal/modal/ModalRegistration";


const NavbarCustom = () => {
  
  return (
    <div>
        <ModalLogIn />
        <ModalRegistration />
    </div>
  );
};

export default NavbarCustom;
