import React, { useEffect, useState } from 'react'
import Header from './Header'
import TaskList from './TaskList'
import "./styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { set } from './slices/taskList'

const App = () => {

  const state = useSelector( (state)=>state.tasklist.tasks );
  const dispatch = useDispatch();

  useEffect( ()=>{

    let saveTasks = JSON.parse( localStorage.getItem('taskList'));

    if(!saveTasks || !saveTasks.tasks){
      saveTasks = [];
    }
    else{
      saveTasks = saveTasks.tasks;
    }

    dispatch(set(saveTasks));

  }, [] )

  useEffect( ()=>{

    

  } , [state] )

  return (
    <div>
        <Header />
        <TaskList />

    </div>
  )
}

export default App