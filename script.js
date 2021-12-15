$(document).ready(function(){
    $('.ui.accordion').accordion();
});

window.alert("Try viewing the web page at 90% to 100% zoom for best experience");

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
var n = 3;
var r = 325;
var theta  = Math.PI / 2;
var step  = (2*Math.PI) / n;

function drawEdges(n){
    let step  = (2*Math.PI) / n;
    let count = 0;
    let theta = Math.PI / 2;
    while (count < n){
        let x = r * Math.cos(theta) + center_x;
        let y = center_y -  ( r * Math.sin(theta)) ;
        drawCircle(x , y , 10);
        theta += step;
        count++;
    }
}

drawEdges(n);

var request;
var x = center_x;
var y = center_y;
var itr = 0;
var isClicked = false;
var ratio = 50;

function draw(x , y , itr ){
    if (itr > 1000 ) return;
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
    draw(x , y , itr);
}

//window.setInterval(draw(x , y , itr) , 100);

function draw2(){
    if (itr > 5000 ) return;
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
    request = window.requestAnimationFrame(draw2);

}

draw2();            //Why some problem with draw(3 , 2) ...ie declaring n inside the function
 var primaryButton = document.getElementById('ui primary button');
 

function onClick(){
    //window.cancelAnimationFrame(request);
    colorRect(0,0, canvas.width,canvas.height, 'black');//ctx.clearRect(0,0,canvas.width,canvas.height);
    
    n = document.getElementById('nthsidedpolygon').value;
    ratio = document.getElementById('distratio').value;
    //drawEdges(n);
    //x = center_x;
    //y = center_y;
    //itr = 0;
    //draw2();
    //return true;
}

 
 ;
// function playForSide(){
//     drawEdges(n);
//     draw2()
// }




function fetchDadJokes(){
    var xhrRequest =new XMLHttpRequest();//creating request object

    xhrRequest.onload  =function(){ //this is handler...function that will be called once we have a request
        //converting the received String from server to JSON object
        var response = JSON.parse(xhrRequest.response);
        var joke  =response.attachments[0].text;
        window.alert(joke);

        // var jokeBox = document.getElementById('joke');
        // jokeBox.innerHTML = joke;
    };

    xhrRequest.open('get' , 'https://icanhazdadjoke.com/slack' , true);//opening the request
    xhrRequest.send();

}


//$('fetch-button').click(fetchRandomDogImage);
var button = document.getElementById('fetch-button');
button.addEventListener('click' , fetchDadJokes);


