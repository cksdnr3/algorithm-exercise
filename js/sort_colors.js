function sort_colors(list) {
  let right = list.length - 1;
  let left = 0;

  let i = 0;
  while (i <= right) {
    if (list[i] === 0) {
      swap(list, left, i);
      left++;
    }

    if (list[i] === 2) {
      swap(list, right, i);
      right--;
    }

    if (list[i] === 1) i++;
  }

  return list;
}

function swap(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
}

const list = [1, 2, 1, 2, 0, 1, 2, 1, 0, 1, 0, 0, 2, 1, 0];
console.log(sort_colors(list));
