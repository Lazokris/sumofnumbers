const testNums = [1, 2, 3, 4];

function sum(num) {
  let total = 0;
  for (const x of num) {
    total += x;
  }
  return total;
}
console.log(sum(testNums));

function sumWhile(num) {
  let total = 0;
  let i = 0;
  while (i < num.length) {
    total += num[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNums));

function reSum(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + reSum(num.slice(1, num.length));
}
console.log(reSum(testNums));

function underSum(num) {
  return _.reduce(num, function (memo, total) { return memo + total; }, 0);
}
console.log(underSum(testNums));
