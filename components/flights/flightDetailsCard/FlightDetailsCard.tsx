'use client'

import React from "react";
import style from "./flightDetailsCard.module.scss";
import OriginFlight from "./OriginFlight";
import DestinationCard from "./DestinationCard";
import FlightInfo from "./FlightInfo";

type flightDetailsCardProps = {
  arrivalDate?: string;
  arrivalTime?: string;
  departureDate?: string;
  departureTime?: string;
  originAirportID?: string;
  destinationAirportID?: string;
};

export default function FlightDetailsCard(props: flightDetailsCardProps) {
  return (
    <div className={style.container}>
      <OriginFlight departureDate={props.departureDate} departureTime={props.departureTime} originAirportID={props.originAirportID}/>
      <FlightInfo arrivalTime={props.arrivalTime} departureTime={props.departureTime}/>
      <DestinationCard
        arrivalDate={props.arrivalDate}
        arrivalTime={props.arrivalTime}
        destinationAirportID={props.destinationAirportID}
      />
    </div>
  );
}
