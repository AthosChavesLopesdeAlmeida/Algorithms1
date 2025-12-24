/*
Se a string contiver algo que não é um parênteses, dá erro

Percorre a string
Se for um parênteses assim ( incrementa o contador em um
Se for um parênteses assim ) diminui o contador em um

Verifica se em algum momento o contador ficou negativo

Se o valor nunca ficou negativo e terminou em 0, retorna true
Senão, retorna false
*/

function isValid(str) {
  if (!/^[()]+$/.test(str)) {
    throw new Error("String inválida");
  };

  let count = 0;
  let containsMinus = false;
  const arr = [];

  for (const char of str){
    if (char === "(") {
      count++;
      arr.push(count);
    } else if(char === ")") {
      count--;
      arr.push(count);
    } else {
      throw new Error('Inválido');
    };
  } ;
  
  arr.forEach(element => {
    if (element < 0) {
      containsMinus = true;
      return containsMinus
    }
  });

  if(count === 0 && containsMinus === false) {
    console.log(true)
  } else {
    console.log(false)
  }
}

isValid('(()()))(');
