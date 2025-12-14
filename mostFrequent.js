function mostFrequent(arr) {
  const count = {}; // Objeto que guarda todas as contagens
  let maxCount = 0;
  let result = null;

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1; // Incrementa

    if (count[num] > maxCount) {
      maxCount = count[num];
      result = num;
    }
  }

  console.log(result)
}

mostFrequent([1, 1, 2, 3, 3, 3]); // 3