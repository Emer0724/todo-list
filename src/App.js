import React from 'react';
import  './App.css';
import ProgressBar from './component/ProgressBar';
import List from './component/List';


function App() {
  return (
    <>
    <div className='container'>
    <div className="box">
      <h1>Todo List</h1>
      <p className='hint'>Add things to do</p>
      <hr />
      <ProgressBar/>
      <div className="playground">
        <List />
      </div>
      <hr />
      <div className="switch"></div>
      <div className="add">
        <h3 className='text'>Add to list</h3>
        <input type="text" />
        <button></button>
      </div>
      

</div>
    </div>
    </>
  );
}

export default App;
