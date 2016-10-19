/**
 * Created by KrivolapchukNG on 14.10.2016.
 */

var number = Math.floor((Math.random() * 100) + 1);
console.log("Загаданное число: ",number);
var arr = [];

for(var i = 1; i < 100; i++){
    arr[i] = i;
}

function findNumber(num,array){
   var i = 0;
   var j = array.length - 1;
   var k;
   var tr = 0;
   for(;i <= j;){
       ++tr;
       k = Math.floor((i + j) / 2);
       console.log("Текущее число в поиске: ",k);
       if(num === array[k]) {
            console.log("Количество попыток: ", tr);
            console.log("Загаданное число: ", k);
           return k;
       }else
           if(num < arr[k]){
               j = k - 1;
               //console.log("num < arr[k] num: %s arr[%s] k:%s j:%s",num ,arr[k], k, j);
           }else{
               i = k + 1;
               //console.log("num >= arr[k] num: %s arr[%s] k:%s i:%s",num ,arr[k], k, i);
           }

       }
   return -1;
}
findNumber(number,arr);