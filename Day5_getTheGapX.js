const str = "Javascript";
function getTheGapX(Xerox){
    let str1 = str.split('X');
    let count=0;
    if(str.indexOf('X') === -1 ) return -1;
    if(str1.length <= 2) return 0; 
    for(let i = 1; i<str1.length-1; i++){
        console.log(str1[i])
        count += str1[i].length;
    }
  return count+str1.length-2;
}
console.log(`Gap between the X's:${getTheGapX(str)}`);

// let a = "javascript"
// console.log(a.indexOf('X'))