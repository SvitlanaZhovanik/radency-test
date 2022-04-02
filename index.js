function makeSubarrays(arr, num) {
  const res = new Set();
  if (num === 0) res.add([]);
  else {
    for (const pc of makeSubarrays(arr, num - 1)) {
      for (const e of arr) {
        if (pc.indexOf(e) !== -1) break;
        res.add([e, ...pc].sort((a, b) => a - b));
      }
    }
  }
  return res;
}

function chooseOptimalDistance(t, k, ls) {
  const arrSum = [...makeSubarrays(ls, k)].map((e) =>
    e.reduce((a, b) => a + b, 0),
  );
  const optimal = Math.max(...arrSum.filter((value) => value <= t));
  if (!arrSum.length || optimal === -Infinity) return null;
  return optimal;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
console.log(chooseOptimalDistance(173, 4, [580, 5, 123, 45, 13, 22]));
console.log(chooseOptimalDistance(12, 2, [2, 10]));
console.log(chooseOptimalDistance(163, 3, [50]));
