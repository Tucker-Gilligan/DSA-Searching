'../app/App.css';
import React, { useState } from 'react';
// import React, { useState } from 'react';
function SearchForm(props) {
  const [binaryResult, setBinaryResult] = useState('');
  const [linearResult, setLinearResult] = useState('');

  function BinarySearch(myList, value, start, end, counter) {
    //if a start value is not provided (optional, start at 0)
    start === undefined ? (start = 0) : (start = start);
    //if an end value is not provided (optional, start at the end of the list)
    end === undefined ? (end = myList.length) : (end = end);
    counter === undefined ? (counter = 0) : (counter = counter);

    //if the start value is greater than the end value, the value hasn't been found, so we return -1

    if (start > end) {
      return `${value} was not found`;
    }

    const index = Math.floor((start + end) / 2);
    const item = myList[index];

    if (item == value) {
      // console.log(myList[index], `item at index ${index} is`);
      return `Found item with value ${value} in ${counter} steps using binary search`;
    } else if (item < value) {
      counter++;
      return BinarySearch(myList, value, index + 1, end, counter);
    } else if (item > value) {
      counter++;
      return BinarySearch(myList, value, start, index - 1, counter);
    }
  }

  function LinearSearch(myList, value) {
    let counter = 0;
    for (let i = 0; i < myList.length; i++) {
      counter++;
      if (myList[i] === value) {
        return `Found item with value ${value} in ${counter} steps using linear search`;
      }
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const myValue = parseInt(evt.target.textBox.value);
    let userListInput = evt.target.listInput.value;
    let binaryArray = userListInput
      .split(',')
      .map(item => parseInt(item))
      .sort((a, b) => a - b);
    let sortedArray = binaryArray.sort((a, b) => a - b);
    setBinaryResult(BinarySearch(sortedArray, myValue));
    let linearArray = userListInput.split(',').map(item => parseInt(item));
    setLinearResult(LinearSearch(linearArray, myValue));
  };

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit} className="search__form">
        <label htmlFor="textBox">Enter Search Item</label>
        <input
          type="text"
          className="textBox"
          id="textBox"
          name="textBox"
          required
        />
        <label htmlFor="textBox">Enter List</label>
        <input
          type="text"
          className="listInput"
          id="listInput"
          name="listInput"
          required
        />
        <button type="submit">Submit</button>
        {binaryResult}
        <br />
        <br />
        {linearResult}
      </form>
    </div>
  );
}

export default SearchForm;
