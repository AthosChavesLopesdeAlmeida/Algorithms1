function sizes(list) {
  let b = 0;
  let s = 0;
  let biggest = list[0];
  let smallest = list[0];

  while (b < list.length) {
    if (list[b] > biggest) {
      biggest = list[b];
      b++;
    } else {
      b++;
    };
  };

  while (s < list.length) {
    if (list[s] < smallest) {
      smallest = list[s];
      s++;
    } else {
      s++;
    };
  };

  const phrase = console.log(`MAIOR: ${biggest}; MENOR: ${smallest}`);
  return phrase;
};

const nums = [200, 9, 0, 84, 15, 55, 136, 8, 1];
sizes(nums);