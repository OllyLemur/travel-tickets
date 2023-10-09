import React, {useCallback, useMemo} from "react";
import styles from "./flightDetailsCard.module.scss";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';


type FlightInfoProps = {
  arrivalTime: string
  departureTime: string
}

export default function FlightInfo(props: FlightInfoProps) {



  const flightTime = useMemo(() => calculateTime(props.arrivalTime, props.departureTime), [props])


  console.log(flightTime);
  return (
    <div className={styles.flightInfo}>
      <div className={styles.airplain}>
        <div><FlightTakeoffIcon sx={{ fontSize: 30 }} /></div>
        <div>{flightTime}</div>
        <div><FlightLandIcon sx={{ fontSize: 30 }} /></div>
      </div>
      <div className={styles.progressbar}></div>
    </div>
  );
}


function calculateTime(arrival: string, departure: string){
  const arrivalTime = new Date('1995-12-17T' + arrival)
  const departureTime = new Date('1995-12-17T' + departure)
  const departureHour = Number(departure.split(':')[0])
  const arrivalHour = Number(arrival.split(':')[0])

  


  if(departureHour > arrivalHour){
    arrivalTime.setDate(arrivalTime.getDate() + 1)

    const difference = Math.abs(departureTime.getTime() - arrivalTime.getTime());
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours % 24} hours, ${minutes % 60} minutes`;
  }else{

    const difference = Math.abs(departureTime.getTime() - arrivalTime.getTime());
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    
    return `${hours % 24} hours, ${minutes % 60} minutes`;
  }

}
