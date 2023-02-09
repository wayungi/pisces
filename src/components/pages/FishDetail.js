import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFish } from '../../reducers/fishSlice';

const FishDetail = () => {
  const { species } = useParams();
  const fish =  useSelector((state) => selectFish(state, species));
  return (
    <section>
        <div>
          <p>Fishery management</p>
          {fish["Fishery Management"]}
        </div>
        <div>
          <h2>Distribution</h2>
          <p>NOOA Fishing Region : {fish["NOAA Fisheries Region"]}</p> 
          <p>Location : {fish["Location"]}</p>
          <p>Population status : {fish["Population Status"]}</p>
          <p>Availability : {fish["Availability"]}</p>
          <p>Appearance : {fish["Color"]}</p>
        </div>
        <div>
          <h2>Nutional information</h2>
          <p>Calories: {fish["Calories"]}</p>
          <p>Cabohydrates: {fish["Carbohydrate"]}</p>
          <p>Cholesterol: {fish["Cholesterol"]}</p>
          <p>Cabohydrates: {fish["Carbohydrate"]}</p>
        </div>
    </section>
  )
}

export default FishDetail