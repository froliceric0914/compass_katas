const repeatNumbers = function(data) {
  let n = "";
  let m = "";
  data.forEach(e => {
    let counter = 0;

    for (let i = 0; i < e[1]; i++) {
      n = n + e[0];
      // console.log("n", n);
      counter++;
      if ((counter = e[1])) {
        m = n + ",";
        console.log("counter", counter);
        console.log("m", m);
      }
    }
  });
  return m;
  // console.log("m", m);
};

// console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
