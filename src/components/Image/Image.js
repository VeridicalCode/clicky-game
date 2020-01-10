import React, { useState } from 'react'
import { iterateScore, useGlobalState } from '../../utils/state';

// takes a prop - the image source - and makes that a tile

function ImageDiv(props) {
  const [ globalScore ] = useGlobalState('score');
  const [ wasClicked, setWasClicked ] = useState(false);

  return (
    <a
      href='./'
      onClick={event => {
        event.preventDefault();
        console.log(`event target: `, event.target.getAttribute('value'));
        setWasClicked(true);
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