function Fibonacci(num) {
    if (num <= 0) {
      return [];
    } else if (num === 1) {
      return [1];
    } else if (num === 2) {
      return [1, 1];
    } else {
      let fib = [1, 1];
      while (fib.length < num) {
        let next_fib = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(next_fib);
      }
      return fib;
    }
  }
  

  console.log(Fibonacci(10))