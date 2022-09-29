function largestOfFour(arr) {
       let newArr = []
       arr.forEach(elem => {
              newArr.push(Math.max(...elem))
       })   
       console.log(newArr)
       return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);