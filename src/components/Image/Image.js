import React, { useState } from 'react'
import { iterateScore, shuffleImages } from '../../utils/state';
import { useGlobalState } from '../../utils/state';

// takes a prop - the image source - and makes that a tile

function ImageDiv(props) {
  const [ wasClicked, setWasClicked ] = useState(false);
  const [ imageArray ] = useGlobalState('imageArray');

  return (
    <a
      href='./'
      onClick={event => {
        event.preventDefault();
        console.log(`event target: `, event.target.getAttribute('value'));
        setWasClicked(true);
        shuffleImages(imageArray);
        iterateScore();
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        value={wasClicked}
      />
    </a>
  )
}

export default ImageDiv;