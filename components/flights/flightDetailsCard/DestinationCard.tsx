'use client'

import React from "react";
import style from "./flightDetailsCard.module.scss";

type destinationCardProps = {
  arrivalDate?: string;
  arrivalTime?: string;
  destinationAirportID?: string;
};

export default function DestinationCard(props: destinationCardProps) {
  return (
    <div className={style.destination}>
      <div>{props.arrivalTime?.slice(0, 5)}</div>
      <div>{props.destinationAirportID}</div>
      <div>{props.arrivalDate?.slice(0, 10)}</div>
    </div>
  );
}
