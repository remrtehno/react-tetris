let capture = [];

let stack = [];

let positionReserve = [];

let fastStack = {};

const setCapture = (arr) => {
  if(arr) {
    stack = [...stack,...arr]
  }
  console.log(stack)
}


export {capture, positionReserve, fastStack, stack, setCapture};