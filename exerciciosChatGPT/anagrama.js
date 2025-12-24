function isAnagram(str1, str2) {
  // Divide a str1 por letras
  const split1 = str1.split('')
  const newString = [];

  let x = split1.length - 1

  // Coloca as letras da str1 de forma invertida no novo array
  while (x >= 0) {
    let lastLetter = split1[x]
    
    newString.push(lastLetter)
    x--;
  }

  // Junta as letras
  const joinedStr1 = newString.join('');

  // Compara
  if (joinedStr1 === str2) {
    console.log(true)
  } else {
    console.log(false)
  }
}

isAnagram('roma', 'amor');