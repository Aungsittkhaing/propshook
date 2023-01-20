import React from 'react'
import { useRef } from 'react'
import "./Form.css"
import {AiOutlinePlusCircle} from "react-icons/ai";

const Form = ({onSubmit}) => {
    const inputRef = useRef();
    // console.log(onSubmit);
    const handleClick=(e)=>{
        e.preventDefault()
        onSubmit(inputRef.current.value);
        inputRef.current.value = "";
    }
  return (
    <div>
        <form className='formContainer'>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>
          <AiOutlinePlusCircle/>
        </button>
      </form>
    </div>
  )
}

export default Form