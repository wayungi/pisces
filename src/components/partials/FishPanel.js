import React, { useState } from 'react';
import missing from '../../images/missing.jpg';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';



const FishPanel = ({ fish }) => {
    let images = [];
    let index = 0;
    if (fish['Image Gallery'] === null) {
        images.push({src: ""});
    }else if ( Array.isArray(fish['Image Gallery'])){
        images = fish['Image Gallery']
    }else {
        images = [fish['Image Gallery']]
    }

    const [image, setImage] = useState(images[index].src);

    const nextImage = () => {
        if (images.length > 1 && index !== images.length) {
            setImage(images[index++]);
        }
    }

  



  


  return (
    <article>
        <h2>{fish['Species Name']}</h2>
        <div>
            <img src={image} alt="fish images" />
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