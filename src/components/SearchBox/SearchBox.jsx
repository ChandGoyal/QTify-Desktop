import React from 'react'
import styles from './SearchBox.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

function SearchBox({placeholder}) {
  return (
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder} required />
        <button className={styles.searchButton} type="submit">
        <SearchIcon />
        </button>
      </form>
  )
}

export default SearchBox