// Solution 1

// function getIndexToIns(arr, num) {
//        arr.sort((a, b) => a - b)
//        // console.log(arr)
//        for (let i = 0; i < arr.length; i++) {
//               if (arr[i] >= num) {
//                      return i
//               } else {
//                      return arr.length
//               }
//        }
// }



// Solution 2

function getIndexToIns(arr, num) {
       arr.filter(elem => num > elem).length
}
getIndexToIns([5, 3, 20, 3], 50);