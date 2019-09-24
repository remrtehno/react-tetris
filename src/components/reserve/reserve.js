let stack = [];

const SetCapture = (arr) => {
  if(arr) {
    stack = [...stack,...arr]
  }
};

export {stack, SetCapture};
