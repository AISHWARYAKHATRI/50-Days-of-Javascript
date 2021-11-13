function randomNumberGeneratorInRange(rangeStart, rangeEnd){
    let range = rangeEnd - rangeStart;
    return Math.floor((Math.random() * range) + rangeStart);
}


console.log(`Random number: ${randomNumberGeneratorInRange(5, 100)}`);