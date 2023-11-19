import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assets/hero-image.png'

function HeroSection({heading1, heading2}) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>{heading1}</h2>
          <h2>{heading2}</h2>
        </div>
        <div className={styles['img-frame']}>
          <img src={HeroImage} alt="Hero Banner" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection