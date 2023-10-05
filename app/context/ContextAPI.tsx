import { createContext } from "react";

type user = {
    email: string;
    password: string;
    phoneNumber?: string;
    location?: string;
    firtsName?: string;
    secondName?: string;
}

export const userContext = createContext({ user: {isLogin: false}, setUser: (user: user) => {}});
