import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './List.module.css'

export default function List(props) {
  const {task,deleteTask, updated}=props
  const {content, done}= task
  const [isDone, setIsdone] =useState(done)
  return (
    <>
    <div className={styles.container}>
      <input 
      type="checkbox"  
      className={styles.done} 
      checked={isDone} //連動狀態 
      onChange={()=>{
        setIsdone(!isDone)
        const updatedTask={...task, done: !isDone}
        updated(updatedTask);
      }}
       />
      <div 
      className={styles.content} 
      style={done ? {textDecoration: 'line-through'} : {}} //如果done值為true 追加刪除線
      >
      {content}
      </div>
      <button className={styles.xButton}><FontAwesomeIcon 
      icon={faXmark} 
      style={{color:"#d0d6f1"}} 
      onClick={()=>deleteTask(task)} />
      </button>
      
    </div>
    </>
  )
}
