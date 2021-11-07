function merge_sorted_array(listM, m, listN, n) {
  let mPointer = m - 1;
  let nPointer = n - 1;
  let i = listM.length - 1;
  while (i >= 0) {
    if (listM[mPointer] >= listN[nPointer]) {
      listM[i] = listM[mPointer];
      mPointer--;
    } else if (listM[mPointer] < listN[nPointer]) {
      listM[i] = listN[nPointer];
      nPointer--;
    }
    i--;
  }

  if (mPointer < 0) {
    for (let i = 0; i < m; i++) {
      listM[i] = listN[i];
    }
  }

  return listM;
}

const listM = [4, 5, 6, 0, 0, 0];
const listN = [1, 2, 3];
console.log(merge_sorted_array(listM, 3, listN, 3));
