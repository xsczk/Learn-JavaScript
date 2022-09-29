// Solution 1
/*
function reverseString(str) {                           
       let newStr=[]
       for (let i = 0; i < str.length; i++){
              newStr.unshift(str[i])
       }
       return newStr.join('');
}

console.log(reverseString("hello")); */


// Solution 2

function reverseString(str) {
       return str.split('').reverse().join('')
}

console.log(reverseString('hello')) 