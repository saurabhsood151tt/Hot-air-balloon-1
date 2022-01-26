
var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obsTop1, obsTop2, obsTop1Img, obsTop2Img;
var obsBottom1Img, obsBottom1;
var obsBottom2Img, obsBottom2;
var obsBottom3Img, obsBottom3;
var obstaclesGroup, birdGroup;




function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
obsTop1Img = loadImage("assets/obsTop1.png");
obsTop2Img = loadImage("assets/obsTop2.png");
obsBottom1Img = loadImage("assets/obsBottom1.png");
obsBottom2Img = loadImage("assets/obsBottom2.png");
obsBottom3Img = loadImage("assets/obsBottom3.png");


}

function setup(){
createCanvas(600,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bg.x = bg.width /2;
bg.velocityX = -4;
  

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;





var rand =  Math.round(random(1,100))
  console.log(rand)

  
}

function draw() {
  
  background(100);
  
 
 
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

  
          if (bg.x < 0) {
            bg.x = bg.width / 2;
          }
        
          //adding gravity
           balloon.velocityY = balloon.velocityY+0.8;
   
           spawnBird();
           spawnBalloon2();

           
           
               
               
       

        spawnObstacles();
        drawSprites();
        
        }
       
        function spawnBalloon2(){
          
          if(frameCount % 140 == 0){
            console.log(frameCount);
          
            obsTop1 = createSprite(700,400,20,50);
            obsTop1.addImage("obsTop1Img", obsTop1Img);
            obsTop1.velocityX=-3;
            balloon.depth=balloon.depth+1;
            obsTop1.scale = 0.095;

          obsTop1.y= Math.round(random(70,100));
         }
         }

         function spawnBird(){
          
          if(frameCount % 130 == 0){
            console.log(frameCount);
          
            obsTop2 = createSprite(900,400,20,50);
            obsTop2.addImage("obsTop2Img", obsTop2Img);
            obsTop2.velocityX=-3;
            balloon.depth=balloon.depth+1;
            obsTop2.scale = 0.095;

          obsTop2.y= Math.round(random(30,230));
         }
         }


         function spawnObstacles(){
          if(frameCount % 80 === 0){
            obstacle=createSprite(405,370,30,30);
        obstacle.velocityX=-4;
        obstacle.scale = 0.09;
        obstacle.lifetime = 134;
        var rand= Math.round(random(1,6));
        switch(rand){
          case 1: obstacle.addImage(obsBottom1Img);
          break;
          case 2: obstacle.addImage(obsBottom2Img);
          break;
          case 3: obstacle.addImage(obsBottom3Img);
          break;
          default:break;
        }
          }
          balloon.depth=balloon.depth+1;
        }

         