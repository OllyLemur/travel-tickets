import React from "react";
import styles from "./welcomeMessage.module.scss";

export default function WelcomeMessage() {
  return (
    <div className={styles.cont}>
      <div className={styles.message}>Cheap Flight Tickets Aggregator</div>
    </div>
  );
}
