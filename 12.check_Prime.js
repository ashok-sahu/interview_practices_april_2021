// /A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

let prime = true
function isPrime(num){
    if(num === 1){
        console.log(`1 is neither prime nor composite number.`)
    }else if(num > 1){
        for(let i = 2;i<num;i++){
            if(num % i === 0 ){
                prime = false;
                break
            }
        }
        if(prime){
            console.log(`${num} is prime number`)
        }else{
            console.log(`${num} is not a prime`)
        }
    }else{
        console.log('The number is not a prime number')
    }
}

isPrime(4)