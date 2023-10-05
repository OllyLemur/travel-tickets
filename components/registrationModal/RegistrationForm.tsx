import React from "react";

import { userContext } from "@/app/context/ContextAPI";
import { useContext } from "react";
import { userRegistration } from "@/utils/proxy";

type RegistrationFormProps = {
  onClose: () => void;
};

export default function RegstrationForm(props: RegistrationFormProps) {
  const { user, setUser } = useContext(userContext);

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({...user, email: e.target.value})
  };

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({...user, password: e.target.value})
  };

  const onChangePhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({...user, phoneNumber: e.target.value})
  };

  const onChangeLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({...user, location: e.target.value})
  };

  const onChangeFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({...user, firstName: e.target.value})
  };

  const onChangeSecondNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUser({...user, secondName: e.target.value})
  };

  const onSubmitHandler = async() => {
    //@ts-ignore
    if(user.email !== '') {
      const userData = await userRegistration(user);
      //@ts-ignore
      setUser({...user, isLogin: userData.user.data.isLogin, ...userData.user.data.user})
      props.onClose()
    }
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
          First name:
          <input
            type="text"
            name="firstName"
            onChange={onChangeFirstNameHandler}
          />
        </label>
        <label>
          Second name:
          <input
            type="text"
            name="secondName"
            onChange={onChangeSecondNameHandler}
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
