/**
 * Created by KrivolapchukNG on 30.09.2016.
 */
var num = 0;
var h = 10;
var w = 10;
var arr = [];
var offsetRight, offsetLeft, offsetTop, offsetBottom;

offsetRight = h;
offsetLeft = 0;
offsetTop = 0;
offsetBottom = w;

// Array initializing
for( var i = 0; i < w; i++){
    arr[i] = [];
    for(var j = 0; j < h; j++){
        arr[i][j] = 0;
    }
}

while(num < h * w){
    // horizontal top right row
    for(var j = offsetLeft; j < offsetRight; j++){
        var i = offsetTop;
        num++;
        arr[i][j] = num;
    }
    offsetRight--;

    // vertical down right column
    for(var i = offsetTop + 1; i < offsetBottom; i++){
        var j = offsetRight;
        num++;
        arr[i][j] = num;
    }
    offsetTop++;

    // horizontal down left row
    for(var j = offsetRight - 1; j >= offsetLeft; --j){
        var i = offsetBottom - 1;
        num++;
        arr[i][j] = num;
    }
    offsetBottom--;

    // vertical up left column
    for(var i = offsetBottom - 1; i >= offsetTop; i--){
        var j = offsetLeft;
        num++;
        arr[i][j] = num;
    }
    offsetLeft++;
}

//DeBug
console.log(arr);
console.log();
console.log("  OFFSET\t\tstart value\tcurrent value");
console.log("offsetRight:\t\t %s\t\t\t  %s",h,offsetRight);
console.log("offsetLeft:\t\t\t 0\t\t\t  %s",offsetLeft);
console.log("offsetTop:\t\t\t 0\t\t\t  %s",offsetTop);
console.log("offsetBottom:\t\t %s\t\t\t  %s",w,offsetBottom);
console.log();
console.log("Num count: \t",num);
