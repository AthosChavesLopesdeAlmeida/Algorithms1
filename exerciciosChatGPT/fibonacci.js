/* 
Faz a equação de fibonacci n vezes
A cada vez, atualiza o valor e insere no array
*/

function fibonacci(n) {
  if (typeof n !== "number") {
    return
  }

  if (n <= 0) {
    return 0;
  } else if(n === 1) {
    return 1
  }

  const fibs = [0, 1];
  let a = 0;
  let b = 1;
  let next;

  for (let i = 2; i < n; i++) {
    next = a + b;
    a = b;
    b = next
    fibs.push(b)
  }
  console.log(fibs)
}

fibonacci(7)