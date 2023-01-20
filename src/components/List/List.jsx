import React from 'react'
import './List.css'
import {BsFillTrashFill} from "react-icons/bs";
import {FaEdit} from "react-icons/fa";

const List = ({data,isDone, onChecked, id, onDelete, onEdit}) => {

  const handleChange = () =>{
    onChecked(id)
  }
  const handleDelete = () =>{
    onDelete(id);
  }
  const handleEdit = () =>{
    onEdit(id)
  }
  return (
    <div className= {`listContainer ${isDone && "done"}`}>
      <div className="textContainer">
      <input checked={isDone} onChange={handleChange} type="checkbox"/>
        <p>{data}</p>
      </div>
      <div className="btnContainer">
        <button onClick={handleDelete}>
          <BsFillTrashFill/>
        </button>
        <button onClick={handleEdit}>
          <FaEdit/>
        </button>
      </div>
    </div>
  )
}

export default List