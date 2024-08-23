import React from 'react';
import api from '../Services';
 
const List = ({task}) => {
    const DeleteTask =(id)=>{
        console.log("gfghcf", id)
        api.delete(`/Todo/${id}`);

    }
  return (
    <div>
        <div className='ListTasks'>
            {task.title}
        </div>
        <button  className='delete-btn' onClick={ ()=> DeleteTask(task.id)}>Delete</button>
    </div>
  )
}
 
export default List