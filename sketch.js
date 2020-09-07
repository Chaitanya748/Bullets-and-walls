var bullet, wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,10,50);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.shapeColor=rgb(80,80,80);

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if (damage>10)
    {
      wall.shapeColor=rgb(255,0,0);
    }
    
    if (damage<10)
    {
      wall.shapeColor=rgb(0,255,0);
    }
  }
  drawSprites(); 
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}