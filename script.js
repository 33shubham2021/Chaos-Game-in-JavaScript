const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var center_x = canvas.width / 2;
var center_y = canvas.height / 2;

function drawCircle(x , y , radius){
    ctx.moveTo(x , y);
    ctx.arc(x , y , radius , 0 , 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = 'cyan';
}
let n = 5;
let distance = 200;
let r = 250;
let theta  = Math.PI / 2;
let step  = (2*Math.PI) / n;

function drawEdges(n){
    var step  = (2*Math.PI) / n;
    var count = 0;
    var theta = Math.PI / 2;
    while (count < n){
        var x = r * Math.cos(theta) + center_x;
        var y = center_y -  ( r * Math.sin(theta)) ;
        drawCircle(x , y , 10);
        theta += step;
        count++;
    }
}

drawEdges(n);

var x = center_x;
var y = center_y;
var itr = 0;
var ratio = 61.8;
function draw2(){
    if (itr > 10000) return;
    drawCircle(x , y , 1);
    let temp = Math.floor(Math.random() * n);//a random number
    let step  = (2*Math.PI) / n;
    let theta  = (Math.PI / 2) + (step * temp);
    let X = r * Math.cos(theta) + center_x;
    let Y = center_y -  (r * Math.sin(theta)) ;
    let a = ratio;let b = 100 - ratio;
    
    x  = (a*X + b*x) / (a+b);
    y = (a*Y + b*y) / (a+b);
    
    itr++;
    window.requestAnimationFrame(draw2);

}

draw2();            //Why some problem with draw(3 , 2) ...ie declaring n inside the function



