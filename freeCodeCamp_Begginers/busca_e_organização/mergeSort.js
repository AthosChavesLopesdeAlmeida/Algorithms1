// O(log n)
function mergeSort(list) {
  if (list.length <= 1) return list;

  const [leftHalf, rightHalf] = split(list);
  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);

  return merge(left, right);
};

// O(log n)
function split(list) {
  let mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);

  return [left, right];
}

// O(n)
function merge(left, right) {
  let l = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      l.push(left[i]);
      i++;
    } else {
      l.push(right[j]);
      j++;
    };
  };

  while (i < left.length) {
    l.push(left[i]);
    i++;
  };

  while (j < right.length) {
    l.push(right[j]);
    j++;
  };

  return l;
}


function verifySorted(list) {
  const n = list.length

  if (n === 0 || n === 1) return true

  return list[0] < list[1] && verifySorted(list.slice(1, list.length))
}


// ===============================TESTES===================================

let arr = mergeSort([1, 39, 340, 30, 42, 0, 5, 9, 7, 89, 67]);
console.log(verifySorted(arr))