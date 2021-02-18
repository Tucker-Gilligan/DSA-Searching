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
  //search left side if the found item is
  //less than the searched for value (index-1)
  else if (item > value) {
    return binarySearch(myList, value, start, index - 1);
  }
}

/*
3.  Find a book

Imagine you are looking for a book in a library with a 
Dewey Decimal index. How would you go about it? 
Can you express this process as a search algorithm? 
Implement your algorithm to find a book whose Dewey 
and book title is provided.
*/

//was (myList, value, start, end)
function searchLibrary(libraryArray, deweyIndex, bookTitle, start, end) {
  //if a start value is not provided (optional, start at 0)
  var start = start === undefined ? 0 : start;
  //if an end value is not provided (optional, start at the end of the list)
  var end = end === undefined ? libraryArray.length : end;

  //if the start value is greater than the end value, the value hasn't been found, so we return -1
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const currentTitle = libraryArray[index].book_title;
  const currentDewey = libraryArray[index].dewey;

  //if the array at the index we are at matches the value
  //return the index of that value (successfully found)
  if (currentTitle == bookTitle && currentDewey == deweyIndex) {
    return `Book with title ${bookTitle} is located at index ${index}`;
  }
  if (currentTitle !== bookTitle && currentDewey == deweyIndex) {
    return searchLibrary(libraryArray, deweyIndex, bookTitle, index + 1, end);
  }
  //if the item is less than the value
  //continue our search, call function again while
  //incrementing the search index as our start value
  //search right because the item at the index we are searching
  //is less than the value we are searching for
  else if (currentDewey < deweyIndex) {
    return searchLibrary(libraryArray, deweyIndex, bookTitle, index + 1, end);
  }
  //search left side if the found item is
  //less than the searched for value (index-1)
  else if (currentDewey > deweyIndex) {
    return searchLibrary(libraryArray, deweyIndex, bookTitle, start, index - 1);
  }
}

// main function for all function calls:)
function main() {
  const library = [
    {
      author: 'Cowlishaw, Mike',
      dewey: '005.133',
      book_title: 'The REXX Language',
    },
    {
      author: 'Sams',
      dewey: '005.133',
      book_title: 'Teach Yourself C++ In 21 Days',
    },
    {
      author: 'Stroustrup., Bjarne',
      dewey: '005.133',
      book_title: 'The C++ Programming Language',
    },
    {
      author: 'Crockford, Douglas',
      dewey: '005.2762',
      book_title: 'JavaScript: The Good Parts',
    },
    {
      author: 'Flanagan, David',
      dewey: '005.2762',
      book_title: 'JavaScript: The Definitive Guide',
    },
    {
      author: 'Schmidt, Meinhard',
      dewey: '005.44684',
      book_title: 'Windows Vista for Dummies',
    },
    { author: 'Zondervan', dewey: '220.52081', book_title: 'NIV Study Bible' },
    {
      author: 'Humphries, Russell, Dr.',
      dewey: '231.7652',
      book_title: 'Starlight and Time',
    },
    {
      author: 'Jane, Frederick Thomas',
      dewey: '623.82509051',
      book_title: "Jane's Fighting Ships",
    },
    {
      author: 'Norris, Chuck',
      dewey: '796.8092',
      book_title: 'The Official Chuck Norris Fact Book',
    },
  ];

  console.log(searchLibrary(library, '005.2762', 'JavaScript: The Good Parts'));
  // console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8));
}

main();
