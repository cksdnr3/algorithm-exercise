function binary_search(list, n) {
  function recursion(start = 0, end = list.length - 1) {
    let pivotIdx = Math.floor((end + start) / 2);
    let pivot = list[pivotIdx];

    if (n === pivot) return pivotIdx;
    if (n > pivot) return recursion(pivotIdx + 1);
    if (n < pivot) return recursion(start, pivotIdx);
  }
  return recursion();
}

console.log(binary_search([1, 2, 3, 4, 5, 6], 5));
