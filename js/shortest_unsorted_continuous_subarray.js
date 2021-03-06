function shortest_unsorted_continuous_subarray(list) {
  let i = 0;
  let upPeak = -Infinity;
  let downPeak = Infinity;

  while (i < list.length) {
    if (list[i] > list[i + 1] && upPeak < list[i]) {
      upPeak = list[i];
    }
    i++;
  }

  i = list.length - 1;
  while (i >= 0) {
    if (list[i] < list[i - 1] && downPeak > list[i]) {
      downPeak = list[i];
    }
    i--;
  }

  let left;
  if (downPeak !== Infinity) {
    for (let i = 0; i < list.length; i++) {
      if (downPeak > list[i]) {
        left = i;
      }
    }
  }

  let right;
  if (upPeak !== -Infinity) {
    for (let i = list.length - 1; i >= 0; i--) {
      if (upPeak < list[i]) {
        right = i;
      }
    }
  }

  return left !== undefined ? Math.abs(right - left - 1) : -1;
}

console.log(shortest_unsorted_continuous_subarray([2, 6, 4, 8, 10, 9, 15]));
