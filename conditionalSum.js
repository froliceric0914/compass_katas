const conditionalSum = function(values, condition) {
  let sum = 0;
  if (values) {
    switch (condition) {
      case "even":
        values.forEach(e => {
          if (e % 2 === 0) {
            sum += e;
          }
        });

        break;
      case "odd":
        values.forEach(e => {
          if (e % 2 !== 0) {
            sum += e;
          }
        });
        break;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
