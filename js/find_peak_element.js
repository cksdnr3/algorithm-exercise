function find_peak_element(list) {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    let pivotIdx = (left + right) / 2;

    let pivot = list[pivotIdx];
    let next = list[pivotIdx + 1];

    if (pivot < next) {
      left = pivotIdx + 1;
    } else {
      right = pivotIdx;
    }
  }
  return list[left];
}

const list = [1, 3, 2, 4, 5, 10, 6, 7, 8];
console.log(find_peak_element(list));
