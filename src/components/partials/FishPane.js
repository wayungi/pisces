import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import PropTypes from 'prop-types';
import missing from '../../images/missing.jpg';

const FishPane = ({ fish }) => {
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
    <article>
      <h2 className="text-center font-bold text-gray-600">{fish['Species Name']}</h2>
      <div className="min-w-full">
        <img src={images[index].src} alt="fish images" className="min-w-full rounded-md" />
      </div>
      <div className="flex flex-row justify-center my-4">
        <button type="button" className="py-1 px-8 border-2 border-gray-700 rounded-md mr-10">
          <GrFormPrevious onClick={() => prevImage()} />
        </button>
        <button type="button" className="py-1 px-8 border-2 border-gray-700 rounded-md">
          <GrFormNext onClick={() => nextImage()} />
        </button>
      </div>
    </article>
  );
};

FishPane.propTypes = {
  fish: PropTypes.shape(
    {
      'Image Gallery': PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
      'Species Name': PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default FishPane;
