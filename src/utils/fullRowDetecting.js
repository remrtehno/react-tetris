import _ from "lodash";

function deleteFromArray(array, value) {
  return array.filter( x => x[1] !== value);
}

function countOccur(array, value) {
  return array.filter( x => x === value).length === 10;
}

export function fullRowDetect(array) {
  let index = -1;
  let cache = [];
  let clone = _.cloneDeep(array);
  while (++index < array.length) {
    cache.push(array[index][1]);
    if(countOccur(cache, array[index][1])) {
      clone = deleteFromArray(clone, array[index][1]);
      clone.map(v => v[1]++);
    }
  }
  return clone;
}
