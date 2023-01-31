import React, { useState } from 'react';
import missing from '../../images/missing.jpg';


const FishPanel = ({ fish }) => {
    //console.log(fish);
    const images = fish['Image Gallery'];
  
  return (
    <article>
        <h2>{fish['Species Name']}</h2>
        <div>
            <img src='' alt="fish images" />
        </div>
        <p>Scientific name: <span>{fish['Scientific Name']}</span></p>
        <p>NOAA Fisherires region: <span>{fish['NOAA Fisheries Region']}</span></p>
    </article>
  )
}

export default FishPanel