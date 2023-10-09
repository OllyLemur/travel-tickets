"use client";

import React, { useContext, useState } from "react";
import styles from "./flightItem.module.scss";
import FlightDetailsCard from "./flightDetailsCard/FlightDetailsCard";
import { flightsContext } from "@/app/context/ContextAPI";

type flightItemProps = {
  information: {
    firstFlight: {
      aircompany?: string;
      arrivalDate?: string;
      arrivalTime?: string;
      departureDate?: string;
      departureTime?: string;
      destinationAirportID?: string;
      flightID?: number;
      originAirportID?: string;
      price?: number;
      reservedNumberOfSeats?: number;
      totalNumberOfSeats?: number;
    };
    secondFlight: {
      aircompany?: string;
      arrivalDate?: string;
      arrivalTime?: string;
      departureDate?: string;
      departureTime?: string;
      destinationAirportID?: string;
      flightID?: number;
      originAirportID?: string;
      price?: number;
      reservedNumberOfSeats?: number;
      totalNumberOfSeats?: number;
    };
  };
};

export default function FlightItem(props: flightItemProps) {


  const {flights, setFlights} = useContext(flightsContext)


  return (
    <div className={styles.cont}>
      <div className={styles.price}>{(props.information.firstFlight.price + props.information.secondFlight.price) * flights.searchData.seats}$</div>
      <div className={styles.card}>
        <h2>{props.information.firstFlight.aircompany}</h2>
        <FlightDetailsCard
          arrivalDate={props.information.firstFlight.arrivalDate}
          arrivalTime={props.information.firstFlight.arrivalTime}
          departureDate={props.information.firstFlight.departureDate}
          departureTime={props.information.firstFlight.departureTime}
          destinationAirportID={props.information.firstFlight.destinationAirportID}
          originAirportID={props.information.firstFlight.originAirportID}
        />
        <div className={styles.line}></div>
        <FlightDetailsCard
          arrivalDate={props.information.secondFlight.arrivalDate}
          arrivalTime={props.information.secondFlight.arrivalTime}
          departureDate={props.information.secondFlight.departureDate}
          departureTime={props.information.secondFlight.departureTime}
          destinationAirportID={props.information.secondFlight.destinationAirportID}
          originAirportID={props.information.secondFlight.originAirportID}
        />
      </div>
    </div>
  );
}
