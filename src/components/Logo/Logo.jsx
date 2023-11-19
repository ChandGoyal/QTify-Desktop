import React from 'react'
import styles from './Logo.module.css'
import LogoImage from '../../assets/logo.png'

function Logo() {
  return (
    <img src={LogoImage} alt="Logo" className={styles.logo} />
  )
}

export default Logo