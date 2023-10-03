import React from "react";

import { userContext } from "@/app/api/context/ContextAPI";
import { useState, useContext } from "react";

type RegistrationFormProps = {
  onClose: () => void;
};

export default function RegstrationForm(props: RegistrationFormProps) {
  const [userEmailInput, setUserEmail] = useState("");
  const [userPasswordInput, setUserPasswordInput] = useState("");
  const [userPhoneNumberInput, setUserPhoneNumberInput] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const { user, setUser } = useContext(userContext);

  const onChangeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserEmail(e.target.value);
  };

  const onChangePasswordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserPasswordInput(e.target.value);
  };

  const onChangePhoneNumberHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserPhoneNumberInput(e.target.value);
  };

  const onChangeLocationHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserLocation(e.target.value);
  };

  const onSubmitHandler = () => {
    setUser({
      ...user,
      email: userEmailInput,
      password: userPasswordInput,
      phoneNumber: userPhoneNumberInput,
      location: userLocation
    });
    props.onClose();
  };

  return (
    <>
      <form>
        <label>
          Email:
          <input type="email" name="email" onChange={onChangeEmailHandler} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={onChangePasswordHandler}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="phone_number"
            onChange={onChangePhoneNumberHandler}
          />
        </label>
        <label>
          Your location:
          <input
            type="text"
            name="location"
            onChange={onChangeLocationHandler}
          />
        </label>
      </form>
      <button onClick={onSubmitHandler}>Registration</button>
    </>
  );
}
