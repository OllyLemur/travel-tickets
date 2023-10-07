import { createContext } from "react";

type user = {
    email: string;
    password: string;
    phoneNumber?: string;
    location?: string;
    firtsName?: string;
    secondName?: string;
}

type flights = {
    searchData?: {

    };
    fligthsData?: {

    }
}

export const userContext = createContext({ user: {isLogin: false}, setUser: (user: user) => {}});

export const flightsContext = createContext({flights: {}, setFlights: (flights: flights) => {}})
