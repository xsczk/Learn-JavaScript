function titleCase(str) {
       let arrStr = str.split(' ')
       let newArr = []
       for (let i in arrStr) {
              newArr.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1).toLowerCase())
       }
       return newArr.join(' ')
}

titleCase("I'm a little tea pot");