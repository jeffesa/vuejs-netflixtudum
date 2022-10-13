/**
 * 
 * @param {Array} array 
 * @param {Number} movedIndex 
 * @returns {Array} re-ordered copy of array
 */
export function moveArrayItemToStart(array, movedIndex) {
  if (movedIndex < 1 || movedIndex >= array.length) {
    return array
  }

  const { [movedIndex]: movedItem, ...otherItems } = array,
    othersArray = Object.values(otherItems);

  return [movedItem, ...othersArray]
}