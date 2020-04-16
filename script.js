function testNum(num) {
    return new Promise(function (resolve, reject) {
        if (num > 50){
            resolve(num + " is more than 50 man")
        } else {
            resolve(num + " is less than 50 my guy")
        }
    })
}

console.log(testNum(59));
console.log(testNum(15));
