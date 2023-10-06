import React,{useState, useEffect} from 'react';
import ProgressBar from './component/ProgressBar';
import List from './component/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'; //放在bs的css之下,來壓過bs的預設值
import Switch from './component/Switch';

function App() {
  const [tasks, setTasks]=useState([]);
  //本地儲存
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  //亂數生成id
  const idGenerate=()=> {
    const front = new Date().getTime()
    const back = Math.random()*10 
    const taskId = `${front}-${back}`;
    return taskId
  }
  //新增任務功能
  const addTask=()=>{
    const mytask = document.getElementById('task').value;
    if(mytask !== ''){
      const newTask = {
        id: idGenerate(),
        content: mytask,
        done: false, //預設未完成
      };
      setTasks([...tasks, newTask]);
      document.getElementById('task').value = ''
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    }
  }
  //刪除任務
  const deleteTask = (task)=>{
    const renewTasks = tasks.filter((t)=>t!== task);
    setTasks(renewTasks)
    localStorage.setItem('tasks', JSON.stringify(renewTasks))
  };
  //變更任務狀態
  const updated = (updatedTask) =>{
    const updatedTasks = tasks.map((task)=>{
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task
    })
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }
  const sum = tasks.length
  const doneSum = tasks.filter(task => task.done === true).length
  return (
    <>
    <div className='container'>
      <div className="box">
        <div className="title">
          <h1>Todo List</h1>
          <p className='hint'>Add things to do</p>
          <hr />
        </div>
      <ProgressBar sum={sum} doneSum={doneSum} />
      <div className="playground-container">
        <div className="playground">
          {/* 依照tasks陣列內的內容生成list元件 */}
          {tasks.map((task,index)=>(
          <List task={task} key={index} deleteTask={deleteTask} updated={updated} />))}
        </div>
      </div>
      <hr />
      <div className="switch">
      <div className="switch_title">
      <p>Move done things to end?</p>
      </div>  
        <Switch />
      </div>
        <div className="add">
        <h3 className='text'>Add to list</h3>
          <div className="ctrl">
        <input  type="text" id='task'/>
        <button className="btn" type="submit" onClick={addTask}>+</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
