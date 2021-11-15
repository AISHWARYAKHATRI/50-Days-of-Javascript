const num = 3849;
function reverseGivenInteger(num){
    let rev = 0;
    while(num){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
        
    }
    return rev;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);