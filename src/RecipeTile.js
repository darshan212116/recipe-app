import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile ({recipe}) {
  return (
    // recipe["recipe"]["image"].match(/\.jpg|jpeg|png|gif)$/)
    // !=null &&
     (<div className='recipetile'>
        <img className='recipetile__img' src={recipe["recipe"]["image"]}/>
      <p className='recipetile__name'>{recipe["recipe"]["label"]}</p>
      
    </div>
    )
  );
}


