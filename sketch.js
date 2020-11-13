var thickness, wall;
var speed, weight, bullet;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random (30,52);
  thickness = random(22,83);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, thickness, 200);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
  
}

function draw() {
  background(0,0,0); 

  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(deformation>10){
      wall.shapeColor = color(255,0,0);
    }

    if(deformation<10){
      wall.shapeColor = color(0,255,0)
    }
  }


  drawSprites();
}