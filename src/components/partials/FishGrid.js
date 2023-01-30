import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllFish } from '../../reducers/fishSlice'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';

const FishGrid = () => {
  const fishArray =  useSelector(selectAllFish);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10); 
  const fishDisplayList = fishArray.slice(start, end);  

  const next = () => {
    if (end === fishArray.length) return;
    setStart(end);
    setEnd((prevState) => fishArray.length > prevState + 10 ? prevState + 10 : fishArray.length);
  }

  const prev = () => {
    if(start === 0) return;
    setEnd(start);
    setStart((prevState) => prevState - 10 > 0 ? prevState - 10 : 0);
  };


  console.log(fishDisplayList)
  return (
    <section>

    <button><GrFormPrevious onClick={() => prev()}/></button>
    <button><GrFormNext onClick={() => next()}/></button>

    </section>
  )
}

export default FishGrid