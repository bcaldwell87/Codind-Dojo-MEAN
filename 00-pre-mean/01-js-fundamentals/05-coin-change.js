function coinChange(n) {
    var coins = {
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }
    while (n != 0) {
      if (n % 100 === 0) {
        coins["dollars"] += 1;
        n = n - 100;
      } else if (n % 25 === 0) {
        coins["quarters"] += 1;
        n = n - 25;
      } else if (n % 10 === 0) {
        coins["dimes"] += 1;
        n = n - 10;
      } else if (n % 5 === 0) {
        coins["nickels"] += 1;
        n = n - 5;
      } else if (n % 1 === 0) {
        coins["pennies"] += 1;
        n = n - 1;
      }
    }
  
    console.log(coins);
  }
  
  coinChange(556);
  
  //Recursion
  
  var coinChange = function (n) {
    var coins = {
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }
  
    if (n <= 0) {
      return coins;
    } else {
      console.log(n);
      if (n % 100 === 0) {
        coins["dollars"] += 1;
        return coinChange(n - 100)
      } else if (n % 25 === 0) {
        coins["quarters"] += 1;
        return coinChange(n - 25)
      } else if (n % 10 === 0) {
        coins["dimes"] += 1;
        return coinChange(n - 10)
      } else if (n % 5 === 0) {
        coins["nickels"] += 1;
        return coinChange(n - 5)
      } else if (n % 1 === 0) {
        coins["pennies"] += 1;
        return coinChange(n - 1)
      }
    }
  }
  
  
  console.log(coinChange(556));