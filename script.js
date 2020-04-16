function testNum(num) {
    return new Promise(function (resolve, reject) {
        if (num > 50){
            resolve(num + ' is greater than 50')
        } else {
            resolve(num + ' is lesser than 50')
        }
    })
}

console.log(testNum(59));
console.log(testNum(15));