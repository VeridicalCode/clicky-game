import React from 'react'
import './image.css'


// imageArray is a state held by the Grid container div. each object in it has an image source and a "clicked" value.
// we pass those in as props and check against them on click.

function ImageDiv(props) {

  return (
    <img
      value={props.value}
      src={props.src}
      alt={props.alt}
      clicked={props.clicked}
    />
  )
}

export default ImageDiv;