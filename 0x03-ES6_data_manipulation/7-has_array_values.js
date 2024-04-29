// Returns a boooolean if the set
// is compleated
export default function hasValuesFromArray(set, arr) {
  return arr.reduce((prev, curr) => prev && set.has(curr), true);
}
