"use client";

import { userContext } from "@/app/api/context/ContextAPI";
import React from "react";
import { useState, useContext } from "react";

type LogInFormProps = {
  onClose: () => void;
};

export default function LogInForm(props: LogInFormProps) {
  const [userEmailInput, setUserEmail] = useState("");
  const [userPasswordInput, setUserPasswordInput] = useState("");
  const { user, setUser } = useContext(userContext);

  const onSubmitHandler = () => {
    setUser({ ...user, email: userEmailInput, password: userPasswordInput });
    props.onClose();
  };

  const onChangeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserEmail(e.target.value);
  };

  const onChangePasswordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserPasswordInput(e.target.value);
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
      </form>
      <button onClick={onSubmitHandler}>Log In</button>
    </>
  );
}
