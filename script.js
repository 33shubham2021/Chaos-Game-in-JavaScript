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
let r = 200;
let theta  = Math.PI / 2;
let step  = (2*Math.PI) / n;

function drawEdges(n){
    var step  = (2*Math.PI) / n;
    var count = 0;
    var theta = Math.PI / 2;
    while (count < n){
        var x = r * Math.cos(theta) + center_x;
        var y = r * Math.sin(theta) + center_y;
        drawCircle(x , y , 10);
        theta += step;
        count++;
    }
}

drawEdges(5);

// var x1 = center_x;
// var y1 = center_y - distance;
// var x2 = center_x + distance*Math.cos(Math.PI / 6);
// var y2 = center_y + distance*Math.sin(Math.PI / 6);
// var x3 = center_x - distance*Math.cos(Math.PI / 6);
// var y3 = center_y + distance*Math.sin(Math.PI / 6);

// drawCircle(x1 , y1 , 10);
// drawCircle(x2 , y2 , 10);
// drawCircle(x3 , y3 , 10);

//window.requestAnimationFrame(draw);
var x = center_x;
var y = center_y;
var itr = 0;
var ratio = 61.8 / 100;
function draw2(){
    if (itr > 10000) return;
    drawCircle(x , y , 2);
    let temp = Math.floor(Math.random() * n);//a random number
    let step  = (2*Math.PI) / n;
    let theta  = (Math.PI / 2) + (step * temp);
    let X = r * Math.cos(theta) + center_x;
    let Y = center_y -  (r * Math.sin(theta)) ;

    x  = (x+X) / ratio;
    y = (y + Y) / ratio;
    itr++;
    window.requestAnimationFrame(draw2);

}

draw2();            //Why some problem with draw(3 , 2) ...ie declaring n inside the function

// function draw(){
//     if (itr > 10000) return ;
//     drawCircle(x , y , 2);
//     var temp = Math.floor(Math.random() * 3);//a random no
//     let X;
//     let Y; 
//     if (temp == 0){
//         X = x1;
//         Y = y1;
//     }else if(temp == 1){
//         X = x2;
//         Y = y2;
//     }else{
//         X = x3;
//         Y = y3;
//     }

//     x  = (x+X) / 2;
//     y = (y + Y) / 2;
//     itr++;
//     window.requestAnimationFrame(draw);
// }

// draw();


