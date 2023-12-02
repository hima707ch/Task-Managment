import React, { useState } from 'react'

import InputForm from './components/InputForm';
import ButtonSelector from './components/FilterButton';
import { useDispatch } from 'react-redux';
import { setSort } from './slices/filter';

const Header = () => {

  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  function handleSort(){
    if(selected){
      dispatch(setSort(false))
    }
    else{
      dispatch(setSort(true));
    }
    setSelected( !selected );
    
  }

  return (
    <div className='header'>
      <div>
        <h1>TaskList</h1>
        <ButtonSelector />
        <h2>Sort</h2>
        <button onClick={handleSort}
        style={{ backgroundColor: selected === true ? 'green' : '' }}
        >Sort</button>
      </div>

        <InputForm
        type = "add"
        />

    </div>
  )
}

export default Header