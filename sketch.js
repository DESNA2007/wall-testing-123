var bullet,thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 bullet= createSprite(400, 200, 50, 10);
 wall= createSprite(1500, 200, thickness, height/2);
 weight=random(30,52);
 speed=random(223,321)
 thickness=random(23,83)
 bullet.velocityX=speed;
 bullet.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  

  console.log(bullet.x-wall.x)
 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
if(hascollided(bullet,wall)){
  bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if (damage<10){
  wall.shapeColor=color(255,0,0);

}
if (damage>10){
  wall.shapeColor=color(0,255,0);
}
}
}
  
  drawSprites();
}
