"use client";

import React, { useEffect } from "react";
import { useContext } from "react";
import { flightsContext } from "@/app/context/ContextAPI";
import FlightItem from "./FlightItem";
import { useRouter } from "next/navigation";

export default function FlightList() {
  const { flights, setFlights } = useContext(flightsContext);
  const router = useRouter();

  useEffect(() => {
    //@ts-ignore
    if (flights.firstFlight === undefined) {
      router.push("/");
    }
  }, []);

  const flight = flights.firstFlight
    ? meargeArrays(flights.firstFlight, flights.secondFlight)
    : null;

  return (
    <div>
      {flight ? (
        flight.map((el, i) => <FlightItem information={el} key={i} id={i}/>)
      ) : (
        <div>No resuts</div>
      )}
    </div>
  );
}

const meargeArrays = (firstFlight: [{}], secondFlight: [{}]) => {
  return firstFlight.map((el, i) => {
    return { firstFlight: el, secondFlight: secondFlight[i] };
  });
};
