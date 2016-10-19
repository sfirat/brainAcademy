/**
 * Created by KrivolapchukNG on 12.10.2016.
 */
var arr = [4,3,1,2,5,0,6];
var b;
for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length + 1; j++){
        b =[i,j];
        arr[i] = b.reduce(function () {
            if(i < j){
                return i;
            }
        });
    }
}
console.log(arr);