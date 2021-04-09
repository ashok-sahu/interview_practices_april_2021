//The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.
let n1 = 0,
  n2 = 1,
  nextTerm;
function printFibbonasi_series(num) {
  //   for (let i = 1; i < num; i++) {
  //     console.log(n1);
  //     nextTerm = n1 + n2;
  //     n1 = n2;
  //     n2 = nextTerm;
  //   }

  nextTerm = n1+n2
  while (nextTerm <= num) {
    // print the next term
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  return nextTerm;
}

console.log(printFibbonasi_series(10));
