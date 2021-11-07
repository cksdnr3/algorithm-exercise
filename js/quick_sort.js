function quick_sort(list, begin, last) {
  console.log(list, begin, last);
  let length = last - begin + 1;

  if (length <= 1) return list;

  let pivotIdx = Math.floor(Math.random() * (last - begin) + begin);
  console.log(pivotIdx);
  swap(list, pivotIdx, last);

  let left = 0;
  let right = last - 1;
  let pivot = list[last];
  while (left <= right) {
    if (list[left] <= pivot) {
      left += 1;
      continue;
    }

    if (list[right] > pivot) {
      right -= 1;
      continue;
    }

    if (pivot < list[left] && list[right] <= pivot) {
      swap(list, left, right);
      continue;
    }
  }

  swap(list, left, last);

  quick_sort(list, left + 1, last);
  quick_sort(list, begin, left - 1);

  return list;
}
// [1, 2, 3, 4, 6, undefined, 비어 있음, 5]
//  [3, 2, 1, 5, 6, 4] 0 5
//         [1, 2, 3, 5, 6, 4] 3 5
function swap(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
}
let list = [3, 2, 1, 5, 6, 4];
console.log(quick_sort(list, 0, list.length - 1));
