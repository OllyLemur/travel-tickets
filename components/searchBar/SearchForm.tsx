"use client";

import React, { useContext } from "react";
import { flightsContext } from "@/app/context/ContextAPI";
import { flightSearch } from "@/utils/proxy";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";

import styles from './search.module.scss'

export default function SearchForm() {
  const { flights, setFlights } = useContext(flightsContext);
  const router = useRouter();

  const onChangeFromHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, from: formatDate(e.currentTarget.value.trim()) },
    });
  };

  const onChangeToHandler = (e: React.FormEvent<HTMLInputElement>) => {


    setFlights({
      ...flights,
      searchData: { ...flights.searchData, to: formatDate(e.currentTarget.value.trim()) },
    });
  };

  const onChangeOriginPointHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, origin: e.currentTarget.value.trim() },
    });
  };

  const onChangeDestinationPointHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, destination: e.currentTarget.value.trim() },
    });
  };

  const onChangeSeatsHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, seats: e.currentTarget.value },
    });
  };

  const onSubmitHandler = async () => {
    try {
      const flightsInfo = await flightSearch(
        //@ts-ignore
        flights.searchData.from,
        //@ts-ignore
        flights.searchData.to,
        //@ts-ignore
        flights.searchData.origin,
        //@ts-ignore
        flights.searchData.destination
      );
      console.log(flightsInfo);
  
      if (flightsInfo.status === 200) {
        setFlights({ ...flights, ...flightsInfo.flights.data });
        router.push("/flights");
      } else {
        throw new Error(flightsInfo.message);
      }
    } catch (error) {
      
    }

  };

  const formatDate = (date: string) => {
    const inputDate = date;
    return DateTime.fromISO(inputDate).toFormat("yyyy-MM-dd");
  }




  return (
    <div className={styles.contForm}>
      <form className={styles.form}>
        <input placeholder="From" type="date" onChange={onChangeFromHandler} />
        <input placeholder="To" type="date" onChange={onChangeToHandler} />
        <input
          placeholder="Origin point"
          type="text"
          onChange={onChangeOriginPointHandler}
        />
        <input
          placeholder="Destination point"
          type="text"
          onChange={onChangeDestinationPointHandler}
        />
        <input
          placeholder="Seats"
          type="number"
          max={6}
          min={1}
          onChange={onChangeSeatsHandler}
        />
      </form>
      <button className={styles.btn} onClick={onSubmitHandler}>Search</button>
    </div>
  );
}
