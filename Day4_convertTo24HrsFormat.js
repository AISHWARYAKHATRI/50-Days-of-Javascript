const time = '01:59PM';
function convertTo24HrsFormat(time){
    let str = time.split(':');
    if(time.endsWith('AM')){
   if(time.startsWith('12')){
        str [0]=parseInt(str[0], 10) 
        str[0] = '00';
        return str.join(':').slice(0,5);
   }
   else{
       str[0] = 0+str[0] ;
   return str.join(':').slice(0, 5);
   }
    }
    else{
        if(time.startsWith('12')){
            return time.slice(0,5);
        }
        str[0] = parseInt(str[0], 10)+12;
        if(str[1].length<=3){
        if(str[1].startsWith('0')===false){
            str[1]='0'+str[1];
        }
    }
        return str.join(':').slice(0,5);
    }
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);