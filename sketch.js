var Batman

function preload(){
IamBatman = loadImage("batman mimic project pic.png");  
}

function setup(){
createCanvas(400,400)
Batman = new Umbrella(200,200,30,30);
Batman.addImage("because I'm Batman",IamBatman);   
    
}

function draw(){
background(255,255,255);

if(FrameCount % 1 != 0){
    rain = new Drops(random(10,390),0,5);
    rain.shapeColor = "blue";
    rain.velocityY = 20;
    rain.lifetime = 25;
}



drawsprites();
}   

