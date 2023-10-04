import React from 'react';
import ProgressBar from './component/ProgressBar';
import List from './component/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'; //放在bs的css之下,來壓過bs的預設值

function App() {
  const addTask=()=>{

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
      <ProgressBar/>
      <div className="playground">
        <List />
      </div>
      <hr />
      <div className="switch"></div>
        <div className="add">
        <h3 className='text'>Add to list</h3>
          <div className="ctrl">
        <input  type="text" id='task' placeholder='請輸入內容'/>
        <button className="btn btn-primary" type="submit" onClick={addTask}>+</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
