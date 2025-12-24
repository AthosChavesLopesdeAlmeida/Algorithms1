/*
Primeiro loop percorre a string
Se o objeto já contém aquela letra, incrementa nela
Senão, cria uma nova letra com valor 1

Segundo loop percorre o objeto
Verifica o primeiro valor 1
Retorna a chave (letra) daquele valor
*/ 

function firstUnique(str) {
  const count = {};
  str = str.split('');

  for (const char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1
    }
  };

  for (char in count) {
   if (count[char] === 1) {
    console.log(`A primeira letra que não se repete é: '${char}'`);
    return;
   }
  }
};

firstUnique('aaaabbbbccdddddeffffggggi');