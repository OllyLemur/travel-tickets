import { createContext } from "react";

type user = {
    email: string;
    password: string;
    phoneNumber?: string;
    location?: string;
}

export const userContext = createContext({ user: {}, setUser: (user: user) => {}});
