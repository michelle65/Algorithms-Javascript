function fizzBuzz(num) {
    for (let i = 0; i < num; i++) {
        if (i % 15 === 0) console.log('FizzBuzz')
        else if(i%3===0)console.log('Fizz')
        else if(i%5===0)console.log('Buzz')
    }
}

console.log(30)
console.log(10)
console.log(9)
