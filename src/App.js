import react, { useState } from 'react';
import './App.css';
import './ToDoTask';
import ToDoTask from './ToDoTask';

function App() {
  const [task,setTask]=useState("");
  const [items,setItems]=useState([]);

  const inputEvent=(event)=>{
    setTask(event.target.value);
  }

  const addTask=()=>{
    setItems((oldItems)=>{
      setTask("");
      if(task === "")
      return ([...oldItems]);
      else
      return ([...oldItems,task]);
      
    })
  }

  const removeTask=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="App">
      <div className='Main'>
          <h1>TO DO LIST</h1>
          <div className='addTask'>
            <input type="text" placeholder='enter task' onChange={inputEvent} value={task}></input>
            <button className='addButton' onClick={addTask}>+</button>
          </div>

          <div className='items'>
            {items.map((value,index)=>{
              return (
                <ol>
                  <ToDoTask text={value} id={index} onSelect={removeTask}></ToDoTask>
                </ol>
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
