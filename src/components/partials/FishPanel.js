import React from 'react'

const FishPanel = ({fish}) => {
  return (
    <article>
        <h2>species name</h2>
        <div>
            <img src='' alt="fish images" />
        </div>
        <p>Scientific name: <span>Fish scientifi name</span></p>
        <p>NOAA Fisherires region: <span>fish region</span></p>
    </article>
  )
}

export default FishPanel