class Bst {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

//more efficient (though same runtime)

function postToBst(arr, start = 0, end = arr.length) {
  if (start === end) {
    return null;
  }

  const lastValue = arr[end - 1];

  let index = start;
  while (arr[index] < lastValue) {
    index++;
  }

  const lessThanSubtree = postToBst(arr, start, index);
  const greaterThanSubtree = postToBst(arr, index, end - 1);

  const tree = new Bst(lastValue);
  tree.left = lessThanSubtree;
  tree.right = greaterThanSubtree;
  return tree;
}

// function postToBst(arr) {
//   if (!arr.length) {
//     return null;
//   }

//   const lastValue = arr[arr.length - 1];
//   let lessThan = arr.filter(
//     (value, index) => value <= lastValue && index !== arr.length - 1
//   );

//   let greaterThan = arr.filter(
//     (value, index) => value > lastValue && index !== arr.length - 1
//   );

//   const lessThanSubtree = postToBst(lessThan);
//   const greaterThanSubtree = postToBst(greaterThan);

//   const tree = new Bst(lastValue);
//   tree.left = lessThanSubtree;
//   tree.right = greaterThanSubtree;
//   return tree;
// }

console.dir(postToBst([8, 12, 10, 16, 25, 20, 15]));
console.dir(postToBst([]));

/*
            15
    10              20
8       12

*/
