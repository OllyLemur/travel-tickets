"use client";

import { userContext } from "@/app/context/ContextAPI";
import { userLogIn } from "@/utils/proxy";
import React from "react";
import { useState, useContext } from "react";

type LogInFormProps = {
  onClose: () => void;
};

export default function LogInForm(props: LogInFormProps) {
  const { user, setUser } = useContext(userContext);
  const onSubmitHandler = async () => {
    //@ts-ignore
    if (user.email !== "") {
      const userData = await userLogIn(user);
      const isLogin = userData.user.data.isLogin === 'false' ? false : true
      
      //@ts-ignore
      setUser({
        ...user,
        isLogin,
        ...userData.user.data.user,
      });

      props.onClose();
    }
  };

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({ ...user, email: e.target.value });
  };

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({ ...user, password: e.target.value });
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
