var bullet;
var wall;
var speed;
var weight;
var thikness;



function setup()
{
  speed=random(55,90);
  weight=random(400,1500);
  thikness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.shapeColor="white"

  wall=createSprite(1500,200,thikness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw()
{
  createCanvas(1600,400);
  background("black");
  
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;
  bullet.velocityX=speed;

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thikness * thikness * thikness)

    if(damage>10)
    {
     wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }

    fill("white");
      stroke("while");
      textSize(25);
      text("DAMAGE = "+Math.round(damage),500,50);
  }
  drawSprites();
  
    
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
    {
      
      return true;
    }
    
      return false;
    }
