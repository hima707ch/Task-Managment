import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../slices/taskList';

const DeleteModal = ({ setScreen, index }) => {

  const dispatch = useDispatch();

  function handleClick(){
    dispatch(remove(index))
    setScreen("home");
  }

  return (
    <div>
        <div className='overlay' />
        
        <div className='modal'>

            <h1>Are you sure, you are deleting task.</h1>            

            <button onClick={handleClick} >Yes, Delete </button>

        </div>

    </div>
  )
}

export default DeleteModal