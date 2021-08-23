function close(num, target) {
  let minNumber = 1000000000000000000000000000000;
  resultNumber = 0;
  num.sort();
  console.log(num.length);

  for (let i = 0; i < num.length; i++) {
    let a = i + 1;
    console.log(a);
    let x = num.length - 1;
    while (a < x) {
      let sum = num[i] + num[a] + num[x];
      let different = Math.abs(sum - target);
      if (different == 0) return 0;
      if (different < minNumber) {
        minNumber = different;
        resultNumber = sum;
      }
      if (sum <= target) {
        a++;
      } else {
        x--;
      }
    }
  }
  return resultNumber;
}

console.log(close([2, 3, 5, 98], 7));
