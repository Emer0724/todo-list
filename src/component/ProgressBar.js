import React from 'react'
import styles from './ProgressBar.module.css'
export default function ProgressBar() {
  return (
    <>
    <div className={styles.container}>
    <h3 className={styles.rate} >50%</h3>
    <div className={styles.bar}></div>
    </div>
    </>
  )
}
