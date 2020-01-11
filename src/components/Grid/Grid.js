import React, { useState } from 'react';
import { iterateScore, zeroScore, setTopScore, useGlobalState } from '../../utils/state';
import { shuffleImages, setAllFalse, setTrueAtIndex } from '../../utils/clickHelpers';
import imageArray from '../../utils/imageArray';
import Image from '../Image/Image';

function Grid() {
  const [ globalScore ] = useGlobalState('score');
  const [ globalTopScore ] = useGlobalState('topScore');
  const [ localArray, setLocalArray ] = useState(imageArray);

  return (
    <div>
      <div >
        {localArray.map((imgObj, index) => {
          return (
            <a
              value={index}
              href='./'
              clicked={imgObj.clicked}
              onClick={event => {
                event.preventDefault();
                if (event.currentTarget.getAttribute('clicked')==='true') {
                  alert(`You already clicked that instrument. Resetting game.`);
                  // if current score is new best, update topScore global
                  if (globalScore > globalTopScore) {
                    setTopScore(globalScore);
                  }
                  // can't directly alter state, so make a temp array to mess with
                  let tempArray = localArray;
                  // use helpers to clear all the 'clicked' values and shuffle
                  setAllFalse(tempArray);
                  shuffleImages(tempArray);
                  // save the temp array back to the state & zero out the score
                  setLocalArray(tempArray);
                  zeroScore();
                }
                else {
                  // can't directly alter state, so make a temp array to mess with
                  let tempArray = localArray;
                  // ask the image what its index in the array is, use helper to set that to true
                  const newIndex = event.currentTarget.getAttribute('value');
                  setTrueAtIndex(tempArray, newIndex);
                  // shuffle, then save modified array to state
                  shuffleImages(tempArray);
                  setLocalArray(tempArray);
                  // finally, increase the global score tracker
                  iterateScore();
                }
              }}
            >
              <Image
                src={imgObj.src}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Grid;