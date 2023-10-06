import React from 'react'
import styles from './Switch.module.css'


export default function Switch() {
  return (
    <>
    <div class="form-check form-switch">
      <input className={`form-check-input ${styles.ss}`} type="checkbox" role="switch" />
    </div>
    </>
  )

}
