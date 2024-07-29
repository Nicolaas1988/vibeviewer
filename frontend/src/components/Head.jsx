import React from 'react'
import logo from '../images/vibe-viewer-logo.png'
import styles from './Head.module.css'
import { useState, useEffect } from 'react'

function Head() {
  const [today, setToday] = useState('')

  useEffect(() => {
    const todayDate = new Date()
    const formattedDate = todayDate.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setToday(formattedDate)
  }, [])

  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt='logo' className={styles.logo} /> <h3> {today}</h3>
    </div>
  )
}

export default Head
