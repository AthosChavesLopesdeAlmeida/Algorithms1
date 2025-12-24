/*
Equanto x for menor ou igual ao comprimento do array
Vai somar arr[x] com cada número (xSum)
Vai incrementar o xSum
Mas se o xSum for do tamanho do Array
Xsum volta a ser 0 e incrementa o x dessa vez
Aí faz tudo denovo até que primeira afirmação seja false
*/


function twoSum(arr, target) {
  let x = 0;
  let xSum = 0
  const sums = [];


  while (x < arr.length) {
    if (xSum < arr.length) {
      sums.push(arr[x] + arr[xSum])
      xSum++;
    } else {
      xSum = 0
      x++;
    }
  }

  console.log(sums);

  sums.forEach(element => {
    if (element === target) {
      console.log(true);
    }
  });
}

twoSum([2, 7, 10, 20, 6, 18], 9)