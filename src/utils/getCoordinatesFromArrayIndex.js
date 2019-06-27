export function getCoordinatesFromArrayIndex(index, width) {
  return [
    index % width,
    Math.floor(index / width),
  ];
};
