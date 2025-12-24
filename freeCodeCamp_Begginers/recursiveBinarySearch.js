function recursive_binary_search(list, target) {
  if (list.length === 0) return false;
    
  let midpoint = Math.floor(list.length / 2);
  let newList;

  if (list[midpoint] === target) {
    return true;
  } else {
    if (list[midpoint] < target) {
      newList = list.slice(midpoint + 1); // até o fim
      return recursive_binary_search(newList, target);
    } else {
      newList = list.slice(0, midpoint); // até midpoint-1
      return recursive_binary_search(newList, target);
    }
  }
}

function verify(result) {
  console.log('Target Found: ' + result)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = recursive_binary_search(numbers, 12);
verify(result)

let result2 = recursive_binary_search(numbers, 6);
verify(result2)