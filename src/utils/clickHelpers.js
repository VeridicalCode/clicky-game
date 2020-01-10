

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
};

// clear all clicked values
export const setAllFalse = (array) => {
  // guess we'll use a for loop like a savage, since array methods aren't cooperating
  for (let i = 0; i < array.length; i++){
    array[i].clicked = 'false';
  }
}

// set current to clicked
export const setTrueAtIndex = (array, index) => {
  array[index].clicked = 'true';
}