import React from 'react';
import './Todo.css';
import { Addlist } from './Addlist';
import { useState, useEffect} from 'react';
import api from'../Services';
import List from './List';

export const Todo = () => {
    const [tasks,addtask]=useState([]);
    useEffect(()=>{
        getData();
    },[])

    

    const getData =()=>{
        api.get('/Todo')
        .then((result)=>{
            addtask(result.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

  return (
    <div className='TodoContainer container'>
        <h1 className='Todo'>TodoApp</h1>
        <Addlist/>
        <div>
            {tasks.map((t)=>(
                <div>
                    <List task={t}/>
                </div>
            ))}
            
        </div>
        
    </div>
  )
}

export default Todo