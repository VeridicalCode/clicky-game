

export const hasAlreadyBeenClicked = (string) => {
  let returnVal = false;
  if (string === 'clicked') {
    returnVal = true;
  }
  return returnVal;
};
