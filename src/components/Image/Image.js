import React from 'react'

// takes a prop - the image source - and makes that a tile

function ImageDiv(props) {
  return (
    <img
      src = { props.src }
      alt = { props.alt }
      value = { props.value }
    />
  )
}

export default ImageDiv;