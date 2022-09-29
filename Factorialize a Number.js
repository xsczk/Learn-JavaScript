function factorialize(num) {
       let result = 1
       for (let i = 1; i < num; i++) {
              result *= i
       }
       return result;
}

factorialize(5);


// Solution 2
/*
function factorialize(num) {
       if (num === 0) {
              return 1;
       }
       return num * factorialize(num - 1);
}

factorialize(5); */