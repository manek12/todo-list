import react from 'react';
import './App.css';

const ToDoTask=(props)=>{
    return (
        <div className='task'>
            <button className='removeButton' onClick={()=>{
                props.onSelect(props.id);
            }}> x </button>
            <h6>{props.text}</h6>
        </div>
    );
}

export default ToDoTask;