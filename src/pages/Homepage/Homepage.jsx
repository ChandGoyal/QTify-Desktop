import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../components/Section/Section';
import styles from './Homepage.module.css'

function Homepage(props) {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums } = data;
  return (
   <div>
    <div className={styles.wrapper}>
      <Section title='Top Albums' data={topAlbums} type='album' />
      <Section title='New Albums' data={newAlbums} type='album' />
    </div>
   </div>
  )
}

export default Homepage