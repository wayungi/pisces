/** @format */

import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import missing from '../../images/missing.jpg';

const FishPanel = ({ fish }) => {
  let images = [];
  if (fish['Image Gallery'] === null) {
    images.push({ src: `${missing}` });
  } else if (Array.isArray(fish['Image Gallery'])) {
    images = fish['Image Gallery'];
  } else {
    images = [fish['Image Gallery']];
  }

  const [index, setIndex] = useState(0);
  const nextImage = () => (
    index < images.length - 1 ? setIndex((prevIndex) => prevIndex + 1) : index
  );
  const prevImage = () => (index > 0 ? setIndex((prevIndex) => prevIndex - 1) : index);

  return (
    <article className="">
      <Link to={`fish/${fish['Scientific Name']}`}>
        <h2 className="text-center font-bold text-gray-600">{fish['Species Name']}</h2>
        <div className="min-w-full">
          <img src={images[index].src} alt="fish images" className="min-w-full rounded-md" />
        </div>
      </Link>
      <div className="flex flex-row justify-center my-4">
        <button type="button" className="py-1 px-8 border-2 border-gray-700 rounded-md mr-10">
          <GrFormPrevious onClick={() => prevImage()} />
        </button>
        <button type="button" className="py-1 px-8 border-2 border-gray-700 rounded-md">
          <GrFormNext onClick={() => nextImage()} />
        </button>
      </div>
      <div>
        <p className="text-center">
          <span className="font-bold pr-4 text-blue-300">Scientific name</span>
          <span className="font-bold text-green-300">{fish['Scientific Name']}</span>
        </p>
        <p className="text-center">
          <span className="font-bold pr-4 text-blue-300">NOAA Fisherires region</span>
          <span className="font-bold text-green-300">{fish['NOAA Fisheries Region']}</span>
        </p>
      </div>
    </article>
  );
};

FishPanel.propTypes = {
  fish: PropTypes.shape(
    {
      'Image Gallery': PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.any, PropTypes.shape({ src: '' })]),
      'Species Name': PropTypes.string,
      'Scientific Name': PropTypes.string,
      'NOAA Fisheries Region': PropTypes.string,
    },
  ).isRequired,
};

export default FishPanel;
