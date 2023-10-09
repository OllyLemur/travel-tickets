'use client'

import React from 'react'
import style from './flightDetailsCard.module.scss'

type flightOriginProps = {
  departureDate?: string;
  departureTime?: string;
  originAirportID?: string;
}

export default function OriginFlight(props: flightOriginProps) {
  return (
    <div className={style.origin}>
        <div>{props.departureTime?.slice(0, 5)}</div>
        <div>{props.originAirportID}</div>
        <div>{props.departureDate?.slice(0, 10)}</div>
    </div>
  )
}
