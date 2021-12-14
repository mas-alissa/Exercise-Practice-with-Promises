//exercise one

const testNum = (num) => {
    return new Promise((resolve,reject) => {
        if(num > 10){
            resolve(check())
        } else {
            reject(num + " is less then 10")
        }
    })
};

function check(){}

testNum(11)
.then(result => console.log(result))
.catch(error => console.log(error))



// exercise two

// Ik heb het niet opgelost.. Het is een beetje moeilijk ...