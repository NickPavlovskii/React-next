function zero(op) {
    if (!op) return function() {return 0};
    return op(0);
  }
  function one(op) {
    if (!op) return function() {return 1};
    return op(1);
  }
  function two(op) {
    if (!op) return function() {return 2};
    return op(2);
  }
  function three(op) {
    if (!op) return function() {return 3};
    return op(3);
  }
  function four(op) {
    if (!op) return function() {return 4};
    return op(4);
  }

function five(op) {
    if (!op) return function() {return 5};
    return op(5);
  }
  function six(op) {
    if (!op) return function() {return 6};
    return op(6);
  }
  
  function seven(op) {
    if (!op) return function() {return 7};
    return op(7);
  }
  function eight(op) {
    if (!op) return function() {return 8};
    return op(8);
  }
  function nine(op) {
    if (!op) return function() {return 9};
    return op(9);
  }
  

  
  function times(b) {
    return function (a) {return a * b()};
  }


  function minus(b) {
    return function (a) {return a - b()};
  }

  function plus(b) {
    return function (a) {return a + b()};
  }
  function dividedBy(b) {
    return function (a) {return Math.trunc(a / b())};
  }

  
  
  console.log(eight(dividedBy(three())))
  
