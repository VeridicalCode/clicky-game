// this is a parent component. it'll display 20 <image> components on a 4x5 grid
// this grid uses an array to fill in the src component of each image
// it also gives each image a property of "clicked = false"
// it'll also call all of our scripts
// each image will cary a title and an onclick
// the onclick will grab the "clicked" status;
// if false, change to true and iterate score
// regenerate array & print
// if true, set score to zero
// regenerate array, reset all "clicked" statuses, print

// so three different functions
// print array with status unclicked
// print array with status not modified
// modify status of clicked only

import React from 'react';
import { iterateScore, zeroScore, useGlobalState } from '../../utils/state';
import Image from '../Image/Image';
import imageArray from '../../utils/imageArray';

function Grid() {
  const [value] = useGlobalState('score');

  return (
    <div>
      <span>current score = {value}</span>
      <div className='grid-container'>
        {imageArray.map(imgObj => {
          return (
            <a
              href='./'
              onClick={event => {
                event.preventDefault();
                console.log(`onclick registered for `, event.target.getAttribute('value'));
                iterateScore();
              }}
            >
              <Image
                src={imgObj.src}
                value={'unclicked'}
              />
            </a>
          )
        })}
      </div>
      <button
        onClick={zeroScore}
      >
        zero score
      </button>
    </div>
  )
}

export default Grid;