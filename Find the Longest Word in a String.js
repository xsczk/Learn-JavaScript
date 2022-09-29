function findLongestWordLength(str) {
       let newStr = str.split(' ')
       let countelem = []
       for (let i = 0; i < newStr.length; i++){
              countelem.push(newStr[i].length)
       }
       return Math.max(...countelem);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");