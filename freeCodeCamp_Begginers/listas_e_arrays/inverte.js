function invert(list) {
  let last = list.length;
  let first = 0;
  const inverted = []

  while (last > first) {
    inverted.push(list[last]);
    last--
  };
  
  return console.log(inverted)
}

const nums = [200, 9, 0, 84, 15, 55, 136, 8, 1];
invert(nums)