/**
 * Created by sfay on 10/7/16.
 */

var strokeWidth = 0;
var delay = 4700;

    // Переделать. Точки в переменные, потом складываем в строку координат.
var paper = Raphael(0,0,1200,1200);
var f1 = "M 320,60 L 420,100 L 180,200 L 320,60";
var f2 = "M 180,200 L 420,100 L 420,180 L 280,240 L 180,200";
var f3 = "M 160,280 L 180,200 L 280,240 L160,280";
var f4 = "M 280,240 L 420,180 L 420,280 L 280,240";
var f5 = "M 160,280 L 280,240 L 420,280 L 260,380 L 160,280";
var f6 = "M 140,440 L 160,280 L 260,380 L 140,440";
var f7 = "M 260,380 L 420,280 L 420,500 L 260,380";
var f8 = "M 140,440 L 260,380 L 420,500 L 140,440";
var f9 = "M 140,440 L 420,500 L 260,540 L 140,440";

var textBrain = paper.text(450,650,"BRAIN").attr({"fill": "#002b48","font-size": "150px", "opacity":"0"});
var textAcademy = paper.text(450,780,"ACADEMY").attr({"fill": "#002b48","font-size": "150px", "opacity":"0"});

var figure1 = paper.path(f1).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure2 = paper.path(f2).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure3 = paper.path(f3).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure4 = paper.path(f4).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure5 = paper.path(f5).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure6 = paper.path(f6).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure7 = paper.path(f7).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure8 = paper.path(f8).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});
var figure9 = paper.path(f9).attr({"stroke": "#002b48", "stroke-width": strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round"});

var figure1delay = Raphael.animation({"fill": "#0c586d"});
var figure2delay = Raphael.animation({"fill": "#135f85"});
var figure3delay = Raphael.animation({"fill": "#167db1"});
var figure4delay = Raphael.animation({"fill": "#187cb1"});
var figure5delay = Raphael.animation({"fill": "#1799d6"});
var figure6delay = Raphael.animation({"fill": "#18add5"});
var figure7delay = Raphael.animation({"fill": "#33c0e1"});
var figure8delay = Raphael.animation({"fill": "#8bd8e9"});
var figure9delay = Raphael.animation({"fill": "#afe9f3"});

var textOpacity1 = Raphael.animation({"opacity":"1"},1500);
var textOpacity2 = Raphael.animation({"opacity":"1"},1500);

figure1.animate(figure1delay.delay(delay));
figure2.animate(figure2delay.delay(delay));
figure3.animate(figure3delay.delay(delay));
figure4.animate(figure4delay.delay(delay));
figure5.animate(figure5delay.delay(delay));
figure6.animate(figure6delay.delay(delay));
figure7.animate(figure7delay.delay(delay));
figure8.animate(figure8delay.delay(delay));
figure9.animate(figure9delay.delay(delay));

textBrain.animate(textOpacity1.delay(3000));
textAcademy.animate(textOpacity2.delay(3000));