const data = {
lists: [
['first', [15, 11, 13, 7, 5]],
['second', [2, 6, 8, 4, 14, 12, 10]],
['third', [9, 3, 1]],
]
};
  
// Only edit below
const { first = 1 } = data.first || {}
const { second = 1 } = data.second || {}
const { third = 1 } = data.third || {}
  
  const result = [];
  
  const extractBiggest = () => {
    const firstLast = first.length ? first[first.length - 1] : -Infinity;
    const secondLast = second.length ? second[second.length - 1] : -Infinity;
    const thirdLast = third.length ? third[third.length - 1] : -Infinity;
  
    if (firstLast >= secondLast && firstLast >= thirdLast) {
      return first.pop();
    }
  
    if (secondLast >= firstLast && secondLast >= thirdLast) {
      return second.pop();
    }
  
    return third.pop();
  };
  
  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);