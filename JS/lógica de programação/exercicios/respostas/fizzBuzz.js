const fizzBuzz = (val) => {

    if (val % 3 === 0 && val % 5 === 0) {
        return 'FizzBuzz';
    }

    if (val % 3 === 0) {
        return 'Fizz';
    }

    if (val % 5 === 0) {
        return'Buzz';
    }

    if(typeof val !== 'number') {
        return val;
    }

    return val;
}


for (let index = 0; index <= 100; index++) {

    console.log(`${Math.floor(index)} - ${fizzBuzz(Math.floor(index))}`);
}