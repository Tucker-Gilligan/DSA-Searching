# Search Algorithms

### Linear search

- Search through each element until you find the element you are looking for

### Binary Search

- Select middle value
- Get feedback on higher or lower
- Move right or left respectively
- Typically implemented recursively
- O(log n) performance
- Only worth sorting if we are running "n" number of searches since sorting is O(n log n) runtime

# Tree Traversal and Searching

### Depth first search (DFS) - descendants first

##### pre-order:

- process node
- step left
- step right

##### post-order:

- step left
- step right
- process node

##### in-order:

- step left
- process node
- step right

### Breadth first search (BFS) - siblings first (work across the tree)

- add in a queue which allows us to work through the nodes in the right order
- Always work from start of the queue
-
- Combination of three actions
  - Process node - a
    - process and add left hand children - b
    - process and add right hand children - c
  - go left
    - process left child, add to queue - d
    - process right child, add to queue - e
- go right

  - process left child, add to queue - f
  - process right child, add to queue - g

- Step left
- Step right
