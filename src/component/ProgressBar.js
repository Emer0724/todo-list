import React from 'react'
import styles from './ProgressBar.module.css'
export default function ProgressBar(props) {
  const {sum, doneSum} = props
  console.log(`任務總數:${sum}`)
  console.log(`已完成任務總數:${doneSum}`)
  const doneRate = ((doneSum / sum * 100)).toFixed(0)
  return (
    <>
    <div className={styles.container}>
    <h3 className={styles.rate} >{doneRate}%</h3>
    <div className={styles.bar}>
    <div className={styles.indicator} style={{ width: `${doneRate}%` }}></div> 
    {/* 有空可做伸長動畫 */}
    </div>
    </div>
    </>
  )
}
