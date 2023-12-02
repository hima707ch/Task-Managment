import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import DeleteModal from './DeleteModal';

const TaskCard = ( { data, index } ) => {
    const {title, description, status, duedate} = data;

    const [screen, setScreen] = useState("");

    console.log("card")

    const dispatch = useDispatch();

    function handleEdit(){
        setScreen("edit")
    }

    function handleDelete(){
        setScreen("delete");
    }

  return (
    <div className='taskcard'>
        <div className='taskdata'> 
            <h3> { title } </h3>
            <p> { status } </p>
            <p> { description } </p>
            <p> { duedate } </p>
            
        </div>

        <div className='taskbutton'>
            <button onClick={handleEdit} >Edit </button>
            <button onClick={handleDelete} >Delete </button>
        </div>

        { screen === "edit" && <Modal setScreen = {setScreen} data = {data} index = {index} /> }
        { screen === "delete" && <DeleteModal setScreen = {setScreen} index = {index} /> }

    </div>
  )
}

export default TaskCard