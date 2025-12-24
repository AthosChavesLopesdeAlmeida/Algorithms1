// A cada valor do array original, faz o push para o novo array. Se o valor já existe no novo array, não faz isso.
function unique(arr) {
  // Confirma se realmente é um array
  if (!Array.isArray(arr)) {
    console.log('O valor informado deve ser um array')
  }

  const newArr = [];

  // checar se para cada índice do array, existe uma duplicata
  arr.forEach(element => {
     if (newArr.includes(element) === false) {
      newArr.push(element)
     }
  });

  console.log(newArr)
}

unique([1, 3, 5, 7, 8, 8, 8, 2, 5, 9, 13, 12, 12, 10, 11, 22, 15, 29, 29, 29]);

