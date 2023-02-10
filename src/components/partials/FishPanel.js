/** @format */

import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FishPanel = ({ fish }) => {
  let images = [];
  if (fish['Image Gallery'] === null) {
    images.push({ src: '' });
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
    <article className="border-2 border-black rounded-md">
      <Link to={`fish/${fish['Scientific Name']}`}>
        <h2 className="text-center font-bold text-gray-600">{fish['Species Name']}</h2>
        <div>
          <img src={images[index].src} alt="fish images" />
        </div>
      </Link>
      <div className="flex flex-row justify-center">
        <button type="button" className="py-1 px-8 border-2 border-gray-700 rounded-md mr-10">
          <GrFormPrevious onClick={() => prevImage()} />
        </button>
        <button type="button" className="py-1 px-8 border-2 border-gray-700 rounded-md">
          <GrFormNext onClick={() => nextImage()} />
        </button>
      </div>
      <p>
        Scientific name:
        <span>{fish['Scientific Name']}</span>
      </p>
      <p>
        NOAA Fisherires region:
        <span>{fish['NOAA Fisheries Region']}</span>
      </p>
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
