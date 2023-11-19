import React from 'react'
import FeedbackButton from '../FeedbackButton/FeedbackButton'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import SearchBox from '../SearchBox/SearchBox'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <a href="/">
        <Logo />
        </a>
        <SearchBox placeholder="Search a album of your choice"/>
        <FeedbackButton children={"Give Feedback"} />
    </nav>
  )
}

export default Navbar