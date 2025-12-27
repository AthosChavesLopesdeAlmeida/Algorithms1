  /* Retorna a posição do target, se encontrado
  Senão, retorna -1
  */ 

function linear_search(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }

  return -1;
}

function verify(index) {
  if (index !== -1) {
    console.log(`Target found at index ${index}`);
  } else {
    console.log("Not found");
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = linear_search(numbers, 6);
verify(result);
