//METHOD 1

// function reverseString(str){
//     var str1 = "";
//     for(let i=str.length-1;i>0;i--){
//            str1+=str[i];
//     }
//     return str1;
// }

// console.log(`Reversed String: ${reverseString("Aishwarya is a good girl")}`)

//METHOD 2

// let str = "aishwarya";
// console.log(str.split("").reverse().join(""))

//METHOD 3

let str = "mithilesh";
function reverseString(str){
    if(str === "") return "";
    else
    return reverseString(str.substr(1))+str.charAt(0);
}

console.log(reverseString(str));