function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }
  
  
  console.log(isEven(58));
  // → true
  console.log(isEven(70));
  // → false
  console.log(isEven(-1));
  // → false