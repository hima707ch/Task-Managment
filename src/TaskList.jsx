import React, { useEffect, useState } from 'react'
import TaskCard from './components/TaskCard'
import { useSelector } from 'react-redux';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  const state = useSelector( (state)=>state.tasklist.tasks );
  const filter = useSelector( (state)=>state.filter.value );
  const sort = useSelector( (state)=>state.filter.sort );
  
  useEffect( ()=>{
    console.log("init tasks");
    setTasks(state);
  } , [state] );

  useEffect( () =>{

    let temp = [...state];

    if(filter !== 'all'){
       
      temp = temp.filter( (ele)=>{
        if(ele.status && ele.status.toLowerCase() == filter.toLowerCase()) return true;
        return false;
      } )
    }

    setTasks(temp);

  }, [filter]);

  
  useEffect( ()=>{
    sortByDate();
  } , [sort] );



  console.log("in task list", tasks, "state",state, filter);

  function sortByDate(){
    let temp = [...tasks];

    temp = temp.sort( (a,b)=>{
      let a_date = new Date(a.duedate);
      let b_date = new Date(b.duedate);
      return a_date - b_date;
    } );

    console.log("sorted fun",temp);

    setTasks(temp);
  }

  return (
    <div>
      
      {
        tasks         
        .map( (ele, index)=>
          <TaskCard 
          data = {ele}
          index = {index}
          />
         )
      }

    </div>
  )
}

export default TaskList