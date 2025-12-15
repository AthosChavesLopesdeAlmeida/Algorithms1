/*
Percorrer a string
*/

function isValid(str) {
  if (!/^[()]+$/.test(str)) {
    throw new Error("String inválida");
  }

      
}

isValid('(()())');
