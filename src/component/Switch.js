import React,{useState} from 'react'
import styles from './Switch.module.css'


export default function Switch(props) {
  const [isOn, setIsOn]= useState(false); 
  const {setIsSorted} = props


  const modeChange = ()=>{
    setIsOn(!isOn)
    setIsSorted(isOn)
  }
  return (
    <>
    <div class="form-check form-switch">
      <input 
      className={`form-check-input ${styles.ss}`} 
      type="checkbox" 
      role="switch" 
      checked={!isOn} //連動狀態
      onChange={modeChange}
      />
    </div>
    </>
  )

}
