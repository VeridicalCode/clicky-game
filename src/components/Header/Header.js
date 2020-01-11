// the header will contain the title and instructions
// it will stretch across the whole page & have some treble clefs or something

import React from 'react'
import { useGlobalState } from '../../utils/state';

// takes a prop - the image source - and makes that a tile

function HeaderDiv(props) {
  const [ globalScore ] = useGlobalState('score');
  const [ globalTopScore ] = useGlobalState('topScore');

  return (
    <div>
      <h1>Welcome to Instrumental Memory!</h1>
      <br />
      <span>Click the images to increase your score, but don't click the same one twice, or you'll lose!</span>
      <br/>
      <span>current score = {globalScore}</span>
      <br/>
      <span>top score = {globalTopScore}</span>
    </div>
  );
}

export default HeaderDiv;