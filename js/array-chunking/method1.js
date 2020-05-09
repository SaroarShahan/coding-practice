const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayChunker = (arr, size) => {
  const result = [];

  for (const element of arr) {
    const last = result[result.length - 1];

    !last || last.length === size ? result.push([element]) : last.push(element);
  }

  return result;
};

console.log(arrayChunker(array, 3));
console.log(arrayChunker(array, 2));
console.log(arrayChunker(array, 4));
