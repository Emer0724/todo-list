import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './List.module.css'

export default function List(props) {
  const {task,deleteTask, updated}=props
  const {content, done}= task
  console.log(`${content}:${done}`);
  return (
    <>
    <div className={styles.container}>
      <input 
      type="checkbox"  
      className={styles.done} 
      checked={done} //讓checkbox與該任務的done狀態連動
      onChange={()=>{
        const updatedTask={...task, done: !done}
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
