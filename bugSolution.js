function foo(a, b) {    if (a === 1) {        return true;    } else {        return false;    } } console.log(foo(1, 2)); // true console.log(foo(1, "1")); // false console.log(foo(1, true)); // false console.log(foo(1, [])); // false console.log(foo(1, {})); // false