const chooseOptimalDistance = (t, k, ls) => {
  let result = 0;

  const count = (arr, n, sum) => {
    if (n) {
      arr.forEach((e, i) => {
        count(arr.slice(i + 1), n - 1, sum + e);
      });
    } else {
      if (sum > result && sum <= t) result = sum;
    }
  };
  count(ls, k, 0);

  return result || null;
};

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
console.log(chooseOptimalDistance(173, 4, [580, 5, 123, 45, 13, 22]));
console.log(chooseOptimalDistance(12, 2, [2, 10]));
console.log(chooseOptimalDistance(163, 3, [50]));
console.log(
  chooseOptimalDistance(
    880,
    8,
    [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89],
  ),
);
