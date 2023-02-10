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
    <section className="mx-2">
      <FishPane fish={fish} />
      <div>
        <h1 className="pt-3 pb-2 font-bold text-gray-600 text-2xl">Fishery management</h1>
        {parse(fish['Fishery Management'])}
      </div>
      <div>
        <h2 className="pt-2 text-gray-600 text-xl">Distribution</h2>
        <div className="flex flex-row">
          <p>NOOA Fishing Region</p>
          {fish['NOAA Fisheries Region']}
        </div>
        <p className="pt-2 text-gray-600 text-xl">Location</p>
        {parse(fish.Location)}
        <p className="pt-2 text-gray-600 text-xl">Population status</p>
        {parse(fish['Population Status'])}
        <p className="pt-2 text-gray-600 text-xl">Availability</p>
        {parse(fish.Availability)}
        <p className="pt-2 text-gray-600 text-xl">Appearance</p>
        {parse(fish.Color)}
      </div>
      <div>
        <h2 className="pt-2 text-gray-600 text-xl">Nutional information</h2>
        <table>
          <thead>
            <td>Item</td>
            <td>Quantity</td>
          </thead>
          <tr>
            <td>Calories</td>
            <td>{fish.Calories}</td>
          </tr>
          <tr>
            <td>Cabohydrates</td>
            <td>{fish.Carbohydrate}</td>
          </tr>
          <tr>
            <td> Cholesterol</td>
            <td>{fish.Cholesterol}</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default FishDetail;
