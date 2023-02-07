import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFish } from '../../reducers/fishSlice';

const FishDetail = () => {
  const { species } = useParams();
  const fish = useSelector((state) => selectFish(state, species));
  
  console.log(fish);
  console.log(fish["Fishery Management"]);


  return (
    <div>Detail</div>
  )
}

export default FishDetail