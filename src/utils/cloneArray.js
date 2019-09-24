export function cloneArray(arr) {
  return Array.from(arr,item => Array.isArray(item) ? cloneArray(item) : item);
};
