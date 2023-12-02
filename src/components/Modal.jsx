import React from 'react'
import InputForm from './InputForm';

const Modal = ( { setScreen, data, index } ) => {

  return (
    <div>
        <div className='overlay' />
        
        <div className='modal'>
            <h1>Edit Task</h1>

            <InputForm
            type = "edit"
            setScreen = {setScreen}
            prevData = {data}
            index = {index}
            />

        </div>
    </div>
  )
}

export default Modal;