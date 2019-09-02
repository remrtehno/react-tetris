let capture = [];

let stack = [];

let positionReserve = [];

let fastStack = {};

const setCapture = (arr) => {
  if(arr) {
    stack = [...stack,...arr]
  }
}


export {capture, positionReserve, fastStack, stack, setCapture};