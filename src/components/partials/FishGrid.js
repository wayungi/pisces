import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllFish } from '../../reducers/fishSlice'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';

const FishGrid = () => {
  const fish =  useSelector(selectAllFish);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState( () => fish.length > 10 ? 11 : fish.length + 1);
  const fishDisplayList = fish.slice(start, end);  

  const next = () => {
    
  }


  console.log(fishDisplayList)
  return (
    <section>

    <button><GrFormPrevious onClick={() => prev}/></button>
    <button><GrFormNext onClick={() => next}/></button>

    </section>
  )
}

export default FishGrid