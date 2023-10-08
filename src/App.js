import React,{useState, useEffect} from 'react';
import ProgressBar from './component/ProgressBar';
import List from './component/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'; //放在bs的css之下,來壓過bs的預設值
import Switch from './component/Switch';

function App() {
  const [tasks, setTasks]=useState([]);
  const [isSorted, setIsSorted]= useState(false)
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
    const mytask = document.getElementById('task').value; //取得輸入的值
    if(mytask !== ''){
      const newTask = {
        id: idGenerate(), // 避免更新done狀態時，連帶影響其他list元件
        content: mytask,
        done: false, //預設未完成
      };
      setTasks([...tasks, newTask]); //將新增的任務資料塞進任務陣列內
      document.getElementById('task').value = '' //清空input
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask])) //將任務陣列存至localstorage，防止更新畫面時任務陣列內資料丟失
    }
  }
  //刪除任務
  const deleteTask = (task)=>{
    const renewTasks = tasks.filter((t)=>t!== task); //篩出沒按下刪除鍵的任務資訊，形成新陣列
    setTasks(renewTasks) //將新陣列設回任務陣列
    localStorage.setItem('tasks', JSON.stringify(renewTasks)) //儲存至localstorage
  };
  //變更任務狀態
  const updated = (updatedTask) =>{
    if(Array.isArray(tasks)){ //確保tasks確定為陣列後執行以下
    const updatedTasks = tasks.map((task)=>{  
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task
    })
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }}
  const sum = tasks ? tasks.length : 0

  const doneSum =tasks ? tasks.filter(task => task.done === true).length : 0
  //變更排序 
const sortTask = ()=>{
  if(isSorted){
    return tasks
    .slice()
    .sort((a,b) =>(a.done === b.done ? 0 : a.done ? 1: -1))
  } else {
    return tasks
  }
}

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
          { tasks.length === 0 ? (<p className='noTask'>尚無待辦事項</p>): (sortTask().map((task, index) => (
          <List task={task} key={index} deleteTask={deleteTask} updated={updated} />)))}
        </div>
      </div>
      <hr />
      <div className="switch">
      <div className="switch_title">
      <p>Move done things to end?</p>
      </div>  
        <Switch setIsSorted={setIsSorted}/>
        {/* <Switch /> */}
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
