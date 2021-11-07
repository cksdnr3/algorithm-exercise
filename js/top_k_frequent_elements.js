function top_k_frequent_elements(list, k) {
  const hash = {};
  list.forEach((v, i) => {
    if (!hash[v]) {
      hash[v] = 1;
      return;
    }
    hash[v]++;
  });

  return Object.keys(hash)
    .sort((c, p) => {
      return hash[p] - hash[c];
    })
    .slice(0, k);
}

const list = ["no", "code", "program", "code", "no", "code", "no", "no"];
const k = 2;
console.log(top_k_frequent_elements(list, 2));
