import { createGlobalState } from 'react-hooks-global-state';
import imageArray from './imageArray';

// first create two global states
const { GlobalStateProvider, setGlobalState, useGlobalState } = createGlobalState ({
  score: 0,
  topScore: 0,
  imageArray: imageArray,
});

// then export functions to modify them
export const iterateScore = () => {
  setGlobalState('score', value => value + 1 );
};

export const zeroScore = () => {
  setGlobalState('score', value => 0 );
}

export const setTopScore = (topScore) => {
  setGlobalState('topScore', value => ({...value, topScore}));
};

// fisher-yates to give a nice random image array
export const shuffleImages = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  setGlobalState('imageArray', value => array);
};

// need to tell react about the values themselves as well as the functions
export { GlobalStateProvider, useGlobalState };