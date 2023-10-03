import { createContext } from "react";

type user = {
    email: string;
    password: string;
}

export const userContext = createContext({ user: {}, setUser: (user: user) => {}});
