import { createGlobalState } from 'react-hooks-global-state';

// first create two global states
const { GlobalStateProvider, setGlobalState, useGlobalState } = createGlobalState ({
  score: 0,
  topScore: 0,
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

// need to tell react about the values themselves as well as the functions
export { GlobalStateProvider, useGlobalState };