function chunkArrayInGroups(arr, size) {
       let newArr = []
       for (let i = 0; i < arr.length / size; i++) {
              newArr.push(arr.slice(size * i, size * (i + 1)))
       }
       console.log(arr.length / size)
       return newArr
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));