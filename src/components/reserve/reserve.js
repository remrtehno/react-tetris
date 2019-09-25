import _ from "lodash";

let stack = [];

function deleteFromArray(array, value) {
  return array.filter( x => x[1] !== value);
}

function countOccur(array, value) {
  return array.filter( x => x === value).length === 10;
}

function fullRowDetect(array) {
  let index = -1;
  let cache = [];
  let clone = _.cloneDeep(array);
  while (++index < array.length) {
    cache.push(array[index][1]);
    if(countOccur(cache, array[index][1])) {
      clone = deleteFromArray(clone, array[index][1]);
      // fall down after delete rows
      clone.map(v => v[1] <= array[index][1] ? v[1]++ : v );
    }
  }
  return clone;
}

const SetCapture = (arr) => {
  if(arr) {
    stack = [...stack,...arr];
    stack = fullRowDetect(stack);
  }
};

export {stack, SetCapture};
