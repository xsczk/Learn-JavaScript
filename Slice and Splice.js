function frankenSplice(arr1, arr2, n) {
       let finalArr = []
       let newArr2 = []
       let newArr1 = arr1 //[1, 2, 3]
       newArr2 = arr2.slice(n) //[5, 6]
       newArr2 = [...newArr1, ...newArr2]
       finalArr = [...arr2.slice(0, n), ...newArr2]
       return finalArr;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));