/*
Encontra o meio do array
Se o número buscado for menor que o valor do meio do array, descarta a parte direita e busca denovo
Mas se o número buscado for maior que o meio do array, descarta a parte esquerda e busca denovo
Faz isso recursivamente até que o número seja encontrado ou que não haja o número
Retorna o índice do número buscado
*/

function binarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1
  }

  let half = Math.floor((left + right) / 2)

  if (arr[half] === target) {
    return half
  } else if (arr[half] > target) {
    return search(arr, target, left, half - 1)
  } else {
    return search(arr, target, half + 1, right)
  }
}

console.log(binarySearch([1,3,4,6,8,11], 6))