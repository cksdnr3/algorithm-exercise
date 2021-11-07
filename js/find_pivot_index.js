function find_pivot_index(list) {
  const sum = list.reduce((acc, v) => acc + v, 0);

  let rightSum = sum;
  let leftSum = 0;
  let prevIdx = 0;

  for (let i = 0; i < list.length; i++) {
    rightSum = rightSum - list[i];
    if (rightSum === leftSum) return i;
    leftSum = leftSum + list[i];
  }
}

const list = [1, 8, 2, 1, 3, 4, 1];
console.log(find_pivot_index(list));
