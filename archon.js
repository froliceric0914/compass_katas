let hare = 5;
let tortoise = 11;
let j = 0;

const calculate = function(hare, tortoise) {
  for (j = 0; j < 20; j++) {
    if (hare < tortoise) hare *= 2;
    else if (hare == tortoise) break;
    else tortoise += 1;
  }

  let final = hare + tortoise;
  return final;
};

console.log(calculate(5, 11));
