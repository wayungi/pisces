import React, { useState } from 'react';
import missing from '../../images/missing.jpg';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';



const FishPanel = ({ fish }) => {
    let images = [];
    if (fish['Image Gallery'] === null) {
        images.push({src: ""});
    }else if ( Array.isArray(fish['Image Gallery'])){
        images = fish['Image Gallery']
    }else {
        images = [fish['Image Gallery']]
    }

    const [index, setIndex] = useState(0);
    const nextImage = () => (index < images.length-1) ? setIndex((prevIndex) => prevIndex + 1) : index;
    const prevImage = () => (index > 0) ?  setIndex((prevIndex) => prevIndex - 1) : index;

  return (
    <article>
        <h2>{fish['Species Name']}</h2>
        <div>
            <img src={images[index].src} alt="fish images" />
            <div>
                <button type="button"><GrFormPrevious onClick={()=> prevImage()}/></button>
                <button type="button"><GrFormNext onClick={()=> nextImage()}/></button>
            </div>
        </div>
        <p>Scientific name: <span>{fish['Scientific Name']}</span></p>
        <p>NOAA Fisherires region: <span>{fish['NOAA Fisheries Region']}</span></p>
    </article>
  )
}

export default FishPanel