/**
 * Created by sfay on 10/7/16.
 */
// TEST

 // leftB.animate({path:"M 420,100 L 320,60"}, 1000, function(){
 //    leftA.animate({path:"M 320,60 L 180,200"}, 1000, function () {
 //      leftC.animate({path:"M 180,200 L 420,100"}, 1000);
 //    });
 // });
 //
 //

var lineHeight = 10;
var duration = 1500;
var brainLeft = Raphael(0,0,1200,600);

// var leftA = brainLeft.path("M 320,60");
// var leftB = brainLeft.path("M 420,100");
// var leftC = brainLeft.path("M 180,200");
// var leftD = brainLeft.path("M 420,180");
// var leftE = brainLeft.path("M 280,240");
// var leftF = brainLeft.path("M 160,280");
// var leftG = brainLeft.path("M 420,280");
// var leftH = brainLeft.path("M 260,380");
// var leftI = brainLeft.path("M 140,440");
// var leftJ = brainLeft.path("M 420,500");
// var leftK = brainLeft.path("M 260,540");

/*-----------LEFT brainLeft------------*/
// POINTS
var leftHI = brainLeft.path("M 260,380");
var leftHJ = brainLeft.path("M 260,380");
var leftHG = brainLeft.path("M 260,380");
var leftHF = brainLeft.path("M 260,380");

var leftEG = brainLeft.path("M 280,240");
var leftEF = brainLeft.path("M 280,240");
var leftEC = brainLeft.path("M 280,240");
var leftED = brainLeft.path("M 280,240");

var leftKJ = brainLeft.path("M 260,540");
var leftKI = brainLeft.path("M 260,540");

var leftAB = brainLeft.path("M 320,60");
var leftAC = brainLeft.path("M 320,60");

var leftJI = brainLeft.path("M 420,500");
var leftJG = brainLeft.path("M 420,500");
var leftIF = brainLeft.path("M 140,440");
var leftBD = brainLeft.path("M 420,100");
var leftGD = brainLeft.path("M 420,280");
var leftCB = brainLeft.path("M 180,200");
var leftCF = brainLeft.path("M 180,200");

// LINES
var animLeftAB = Raphael.animation({path:"M 320,60 L 420,100"},duration);
var animLeftAC = Raphael.animation({path:"M 320,60 L 180,200"},duration);
var animLeftKJ = Raphael.animation({path:"M 260,540 L 420,500"},duration);
var animLeftKI = Raphael.animation({path:"M 260,540 L 140,440"},duration);

var animLeftJI = Raphael.animation({path:"M 420,500 L 140,440"},duration);
var animLeftJG = Raphael.animation({path:"M 420,500 L 420,280"},duration);
var animLeftIF = Raphael.animation({path:"M 140,440 L 160,280"},duration);
var animLeftBD = Raphael.animation({path:"M 420,100 L 420,180"},duration);
var animLeftGD = Raphael.animation({path:"M 420,280 L 420,180"},duration);
var animLeftCB = Raphael.animation({path:"M 180,200 L 420,100"},duration);
var animLeftCF = Raphael.animation({path:"M 180,200 L 160,280"},duration);

//first
leftHI.animate({path:"M 260,380 L 140,440"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftHJ.animate({path:"M 260,380 L 420,500"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftHG.animate({path:"M 260,380 L 420,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftHF.animate({path:"M 260,380 L 160,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftEG.animate({path:"M 280,240 L 420,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftEF.animate({path:"M 280,240 L 160,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftEC.animate({path:"M 280,240 L 180,200"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftED.animate({path:"M 280,240 L 420,180"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});

//second
leftAB.animate(animLeftAB.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftAC.animate(animLeftAC.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftKJ.animate(animLeftKJ.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftKI.animate(animLeftKI.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});

//third
leftJI.animate(animLeftJI.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftJG.animate(animLeftJG.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftIF.animate(animLeftIF.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftBD.animate(animLeftBD.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftGD.animate(animLeftGD.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftCB.animate(animLeftCB.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
leftCF.animate(animLeftCF.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
