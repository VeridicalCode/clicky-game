import React, { useState } from 'react';
import { iterateScore, shuffleImages, zeroScore, useGlobalState } from '../../utils/state';
import imageArray from '../../utils/imageArray';
import Image from '../Image/Image';

function Grid() {
  const [ globalScore ] = useGlobalState('score');
  const [ localArray, setLocalArray ] = useState(imageArray);

  return (
    <div>
      <span>current score = {globalScore}</span>
      <div >
        {localArray.map((imgObj, index) => {
          return (
            <a
              value={index}
              href='./'
              clicked={imgObj.clicked}
              onClick={event => {
                event.preventDefault();
                console.log(`event fired. target: `, event.target);
                if (event.currentTarget.getAttribute('clicked')==='true') {
                  alert(`You already clicked that instrument. Resetting game.`)
                  setLocalArray(imageArray);
                  zeroScore();
                }
                else {
                  let tempArray = localArray;
                  console.log(`temp array: `, tempArray);
                  const newIndex = event.currentTarget.getAttribute('value');
                  console.log(`index of current object: `, newIndex);
                  console.log(`target of click: `, event.target);
                  const newObj = localArray[newIndex];
                  console.log(`newObj to insert: `, newObj)
                  newObj.clicked = 'true';
                  console.log(`not yet clicked. adding to score.`)
                  tempArray.splice(newIndex, 1, newObj);
                  setLocalArray(tempArray);
                  iterateScore();
                }
                shuffleImages(localArray);
              }}
            >
              <Image
                src={imgObj.src}
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