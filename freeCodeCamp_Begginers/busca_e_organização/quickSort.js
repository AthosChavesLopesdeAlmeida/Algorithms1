function quickSort(values) {
  if (values.length <= 1) return values;

  const less_than_pivot = [];
  const greater_than_pivot = [];
  const pivot = values[0];

  for (const value of values.slice(1)) {
    if (value <= pivot) {
      less_than_pivot.push(value);
    } else {
      greater_than_pivot.push(value);
    }
  }

  return [...quickSort(less_than_pivot), pivot, ...quickSort(greater_than_pivot)];
}

const numbers = [5, 2, 8, 3, 7, 6, 7, 9]

let sorted_numbers = quickSort(numbers);
console.log(sorted_numbers);