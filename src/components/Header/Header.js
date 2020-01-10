// the header will contain the title and instructions
// it will stretch across the whole page & have some treble clefs or something

import React from 'react'

// takes a prop - the image source - and makes that a tile

function HeaderDiv(props) {
  return (
    <div>
    <h1>Welcome to Instrumental Memory!</h1>
    <br/>
    <span>Click the images to increase your score, but don't click the same one twice, or you'll lose!</span>
    </div>
  );
}

export default HeaderDiv;