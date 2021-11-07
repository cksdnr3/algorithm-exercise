function two_sum(list, sum) {
  const hash = {};

  list.forEach((v, i) => {
    hash[v] = i;
  });

  console.log(hash);

  for (let i = 0; i < list.length; i++) {
    if (hash[sum - list[i]]) return [hash[sum - list[i]], i];
  }
}

const list = [2, 7, 11, 15];
const sum = 9;
console.log(two_sum(list, sum));
