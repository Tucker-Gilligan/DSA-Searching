/*
1. 
Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, 
identify the sequence of numbers that each recursive 
call will search to try and find 8.

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, 
identify the sequence of numbers that each 
recursive call will search to try and find 16.
*/

function binarySearch(myList, value, start, end) {
  //if a start value is not provided (optional, start at 0)
  var start = start === undefined ? 0 : start;
  //if an end value is not provided (optional, start at the end of the list)
  var end = end === undefined ? myList.length : end;

  //if the start value is greater than the end value, the value hasn't been found, so we return -1
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = myList[index];

  //if the array at the index we are at matches the value
  //return the index of that value (successfully found)
  if (item == value) {
    console.log(myList[index], `item at index ${index} is`);
    return index;
  }
  //if the item is less than the value
  //continue our search, call function again while
  //incrementing the search index as our start value
  //search right because the item at the index we are searching
  //is less than the value we are searching for
  else if (item < value) {
    return binarySearch(myList, value, index + 1);
  }
  //search left side if the found item is less than the searched for value (index-1)
  else if (item > value) {
    return binarySearch(myList, value, start, index - 1);
  }
}

console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8));
