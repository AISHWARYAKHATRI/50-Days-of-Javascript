const str = 'Javascript is fun to learn';
const wordLimit = 5;

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    str = str.split(" ");
    let str1="";
    for(let i=0;i<wordLimit;i++){
       str1=str1+str[i]+" ";
    }
    return str1;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
