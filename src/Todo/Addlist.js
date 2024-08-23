import React from "react";
import { useState } from "react";
import api from "../Services";

export const Addlist = ({}) => {
  const [title, setTitle] = useState({title : ''});



  const HandleChange = (e)=>{
    const {name , value}=e.target;
    setTitle({...title , [name] : value});
  }

  const HandleSubmit = (e)=>{
    e.preventDefault(); // prevent page reload from submission

    api.post('/Todo',title)
    .then(res =>{
        setTitle({title:''}); //clearing inuput form after submission
    })
    .catch((error)=>{
        console.error(error);
    })
    
  }

  return (
    <div className="AddListContainer d-flex-inline">
      <div className="InputConatiner">
        <form onSubmit={HandleSubmit}>
          <input
            className="input"
            name="title"
            type="text"
            placeholder="Add new Task"
            onChange={HandleChange}
            value={title.title}
          />
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
