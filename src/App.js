import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const [getTask, setNewTask] = useState('')
  const [getDataTask, setDataTask] = useState([])
  
  function Add(){
    setDataTask([...getDataTask,getTask])
    setNewTask('')
  }

  function Remove(index){
  const updateTask = getDataTask.filter((_,a) => a  !== index)
  console.log(updateTask)
  setDataTask(updateTask)
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='Title'>Todolist</h1>
       <p>Untuk menulis berbagi macam task. </p>
       <AddTask Add = {Add} getTask = {getTask} setNewTask = {setNewTask}  />
       <br />
       <br  />
       <ListTask getDataTask = {getDataTask} Remove ={Remove} />
      </header>
    </div>
  );
}

export default App;
