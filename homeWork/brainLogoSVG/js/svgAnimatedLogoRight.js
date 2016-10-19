/**
 * Created by sfay on 10/7/16.
 */

var lineHeight = 10;
var duration = 1500;
var brainRight = Raphael(0,0,1200,600);

/*-----------right brainRight------------*/
// POINTS
var rightHI = brainRight.path("M 640,380");
var rightHJ = brainRight.path("M 640,380");
var rightHG = brainRight.path("M 640,380");
var rightHF = brainRight.path("M 640,380");

var rightEG = brainRight.path("M 620,240");
var rightEF = brainRight.path("M 620,240");
var rightEC = brainRight.path("M 620,240");
var rightED = brainRight.path("M 620,240");

var rightKJ = brainRight.path("M 640,540");
var rightKI = brainRight.path("M 640,540");

var rightAB = brainRight.path("M 580,60");
var rightAC = brainRight.path("M 580,60");

var rightJI = brainRight.path("M 480,500");
var rightJG = brainRight.path("M 480,500");
var rightIF = brainRight.path("M 760,440");
var rightBD = brainRight.path("M 480,100");
var rightGD = brainRight.path("M 480,280");
var rightCB = brainRight.path("M 720,200");
var rightCF = brainRight.path("M 720,200");

// LINES
var animrightAB = Raphael.animation({path:"M 580,60 L 480,100"},duration);
var animrightAC = Raphael.animation({path:"M 580,60 L 720,200"},duration);
var animrightKJ = Raphael.animation({path:"M 640,540 L 480,500"},duration);
var animrightKI = Raphael.animation({path:"M 640,540 L 760,440"},duration);

var animrightJI = Raphael.animation({path:"M 480,500 L 760,440"},duration);
var animrightJG = Raphael.animation({path:"M 480,500 L 480,280"},duration);
var animrightIF = Raphael.animation({path:"M 760,440 L 740,280"},duration);
var animrightBD = Raphael.animation({path:"M 480,100 L 480,180"},duration);
var animrightGD = Raphael.animation({path:"M 480,280 L 480,180"},duration);
var animrightCB = Raphael.animation({path:"M 720,200 L 480,100"},duration);
var animrightCF = Raphael.animation({path:"M 720,200 L 740,280"},duration);

//first
rightHI.animate({path:"M 640,380 L 760,440"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightHJ.animate({path:"M 640,380 L 480,500"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightHG.animate({path:"M 640,380 L 480,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightHF.animate({path:"M 640,380 L 740,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightEG.animate({path:"M 620,240 L 480,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightEF.animate({path:"M 620,240 L 740,280"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightEC.animate({path:"M 620,240 L 720,200"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightED.animate({path:"M 620,240 L 480,180"},duration).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});

//second
rightAB.animate(animrightAB.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightAC.animate(animrightAC.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightKJ.animate(animrightKJ.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightKI.animate(animrightKI.delay(1500)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});

//third
rightJI.animate(animrightJI.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightJG.animate(animrightJG.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightIF.animate(animrightIF.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightBD.animate(animrightBD.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightGD.animate(animrightGD.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightCB.animate(animrightCB.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
rightCF.animate(animrightCF.delay(3000)).attr({"stroke": "#002b48", "stroke-width": lineHeight, "stroke-linejoin": "round", "stroke-linecap": "round"});
