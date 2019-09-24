
function  identicalArrays(arrayOne, arraySecond) {
  return arraySecond.every( v => {
    return arrayOne.includes(v)
  })
}

export function identicalArrayInArray(source, comparedArray) {
  return source.some( x => {
    for (const v of comparedArray.values()) {
      if (identicalArrays(x, v)) {
        return true;
      }
    }
  })
}
