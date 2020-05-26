var thickness,wall;
var bullet,speed,weight;
var damage = 0;

function setup() {
  createCanvas(1600,400);
speed= random(223,321);
weight=random(30,52);
thickness=random(22,83);



 bullet= createSprite(50, 200, 50, 5);
 bullet.shapeColor="brown";
 wall=createSprite(1200,200,thickness,height/2);

 bullet.velocityX= speed;

}

function draw() {
  background(255,255,255);  
if (wall.x-bullet.x<=wall.width/2+bullet.width/2){
damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);


if (thickness>=70){
  wall.shapeColor="green";

}
if (thickness<=70){
  wall.shapeColor="red";

}
 
   
   
   }
   drawSprites();
}


  
