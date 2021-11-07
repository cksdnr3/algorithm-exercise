function minimum_size_subarray_sum(s, list) {
  let wIdx = 0;
  let subArrLen = Infinity;
  for (let i = 1; i < list.length; i++) {
    if (list[wIdx] + list[i] === s) {
      if (subArrLen > i - wIdx + 1) subArrLen = i - wIdx + 1;
    }

    if (list[wIdx] + list[i] > s) {
      wIdx++;
    }
  }
  return subArrLen === Infinity ? -1 : subArrLen;
}

console.log(minimum_size_subarray_sum(7, [3, 4, 2, 1, 3, 2]));
