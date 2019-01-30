const calculateChange = function(total, cash) {
  let change1 = cash - total;
  const changeObj = {
    change: change1,
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    oneDollar: 0,
    quarter: 0,
    nickel: 0,
    penny: 0
  };

  //need to define a new Obj to keep the changing value of the change
  // new
  //this.

  if (this.change !== 0) {
    console.log("change2", this.change);
    if (this.change >= 1000) {
      changeObj.tenDollars++;
      this.change = this.change - 1000;
    } else if (this.change >= 500) {
      changeObj.fiveDollars++;
      this.change = this.change - 500;
    } else if (this.change >= 200) {
      changeObj.twoDollars++;
      this.change = this.change - 200;
    } else if (this.change >= 100) {
      changeObj.oneDollar++;
      this.change = this.change - 100;
    } else if (this.change >= 25) {
      changeObj.quarter++;
      this.change = this.change - 25;
    } else if (this.change >= 10) {
      changeObj.dime++;
      this.change = this.change - 10;
    } else if (this.change >= 5) {
      changeObj.nickle++;
      this.change = this.hange - 5;
    } else {
      changeObj.penny++;
      this.change = this.change - 1;
    }
  } else {
    return changeObj;
  }
  console.log(changeObj);
};

calculateChange(1787, 2000);

// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
