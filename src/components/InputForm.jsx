import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add, update } from '../slices/taskList';

const InputForm = ( { type, setScreen, prevData, index } ) => {

    const [data, setData] = useState({});

    const dispatch = useDispatch();

    function handleChange(e){

        setData( (prev)=>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        } )

        console.log(data);
    }

    function handleClick(){

        type === "add" && dispatch(add(data));
        if (type === "edit") {

          dispatch(update({task : data, ind : index}));
          setScreen("home");
          
        }

        setData({});
    }

    useEffect( ()=>{
        if(type === "edit"){
            setData(prevData)
        }
    }, [] )

  return (
    <div>
        <div className='header-form'>
            <input name = "title" className='top-inp' placeholder='Title' onChange={handleChange} value={data.title || ""}/>
            <textarea name = "description" placeholder='Description' onChange={handleChange} value={data.description || ""}/>
            <input name = "status" placeholder='Status' onChange={handleChange} value={data.status || ""}/>
            <input name = "duedate" className='bot-inp' placeholder='Due Date' type='date' onChange={handleChange} value={data.duedate || ""}/>

            <button onClick={handleClick}> { type === "add" && "Add" } {type === "edit" && "Edit" } </button>

        </div>
    </div>
  )
}

export default InputForm