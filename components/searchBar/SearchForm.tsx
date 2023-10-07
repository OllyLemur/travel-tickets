"use client";

import React, { useContext } from "react";
import { flightsContext } from "@/app/context/ContextAPI";
import { flightSearch } from "@/utils/proxy";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const { flights, setFlights } = useContext(flightsContext);
  const router = useRouter();

  const onChangeFromHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, from: e.currentTarget.value },
    });
  };

  const onChangeToHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, to: e.currentTarget.value },
    });
  };

  const onChangeOriginPointHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, origin: e.currentTarget.value },
    });
  };

  const onChangeDestinationPointHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, destination: e.currentTarget.value },
    });
  };

  const onChangeSeatsHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFlights({
      ...flights,
      searchData: { ...flights.searchData, destination: e.currentTarget.value },
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

  return (
    <>
      <form>
        <input placeholder="From" type="data" onChange={onChangeFromHandler} />
        <input placeholder="To" type="data" onChange={onChangeToHandler} />
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
          onChange={onChangeSeatsHandler}
        />
      </form>
      <button onClick={onSubmitHandler}>Search</button>
    </>
  );
}
