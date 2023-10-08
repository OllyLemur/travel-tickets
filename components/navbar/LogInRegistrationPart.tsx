import React from 'react'
import ModalLogIn from "../logInModal/modal/ModalLogIn";
import ModalRegistration from "../registrationModal/modal/ModalRegistration";
import styles from './navbarStyles.module.scss'

export default function LogInRegistrationPart() {
  return (
    
    <div className={styles.login}>
        <ModalLogIn />
        <ModalRegistration />
    </div>
  )
}
