import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import FishPane from '../partials/FishPane';
import { selectFish } from '../../reducers/fishSlice';

const FishDetail = () => {
  const { species } = useParams();
  const fish = useSelector((state) => selectFish(state, species));
  return (
    <section>
      <FishPane fish={fish} />
      <div>
        <p>Fishery management</p>
        {parse(fish['Fishery Management'])}
      </div>
      <div>
        <h2>Distribution</h2>
        <p>NOOA Fishing Region</p>
        {fish['NOAA Fisheries Region']}
        <p>Location</p>
        {parse(fish.Location)}
        <p>Population status</p>
        {parse(fish['Population Status'])}
        <p>Availability</p>
        {parse(fish.Availability)}
        <p>Appearance</p>
        {parse(fish.Color)}
      </div>
      <div>
        <h2>Nutional information</h2>
        <p>
          Calories:
          {fish.Calories}
        </p>
        <p>
          Cabohydrates:
          {fish.Carbohydrate}
        </p>
        <p>
          Cholesterol:
          {fish.Cholesterol}
        </p>
        <p>
          Cabohydrates:
          {fish.Carbohydrate}
        </p>
      </div>
    </section>
  );
};

export default FishDetail;
