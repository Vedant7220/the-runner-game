var canvas;
var forestImg;
var monkey, monkey_Img;
var banana, banana_Img;
var obstacles, stone_Img;
var ground, ground_Img, iGround;
var bananaGroup,obstaclesGroup;
var score = 0;

function preload(){
    forestImg = loadImage("jungle.jpg")
    monkey_Img = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    stone_Img = loadImage("stone.png");
    banana_Img = loadImage("Banana.png");
    ground_Img = loadImage("ground.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);

    ground = createSprite(displayWidth/2, displayHeight/2+200);
    ground.addImage(ground_Img);
    ground.scale = 0.5;
    

    monkey = createSprite(displayWidth/2-600,displayHeight/2);
    monkey.addAnimation("monkey",monkey_Img);
    monkey.scale = 0.25;

  iGround = createSprite(displayWidth/2, displayHeight/2+600,displayWidth,displayHeight);
  iGround.visible = false;
  


    bananaGroup = new Group();
    obstaclesGroup = new Group();
   
}

function draw(){
    background(forestImg);
    drawSprites();

    fill("white");
  textSize(20);
  
 if(keyDown("space") ){
monkey.velocityY = -12;
            }      
            
 if(keyIsDown(UP_ARROW) ){
   monkey.x +=10

  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  
  
  
  console.log(score);
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score + 1;
    
    
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.2;
  }
  
food();
  stone();
  
  
  
  monkey.collide(iGround);
  drawSprites();
   text("score : "+score,displayWidth/2+600,displayHeight/2-400);

}   

function food(){
    if(frameCount%100 === 0){
      banana = createSprite(550,10);
    banana.addImage(banana_Img);
   banana.velocityX = -3;
    banana.scale = 0.05;
    banana.lifetime = 120;
    banana.y = random(displayHeight/2-100,displayHeight/2+100);
    banana.x = random(displayWidth/2+400,displayWidth/2+600);
    
     bananaGroup.add(banana);
      
    }}
  
  function stone(){
    if(World.frameCount % 80 === 0) {
      obstacles = createSprite(550,200);
    obstacles.addImage(stone_Img);
    obstacles.scale = 0.20;
    obstacles.velocityX = -7;
      obstacles.lifetime = 110;
     obstacles.y = displayHeight/2+100;
     obstacles.x = random(displayWidth/2+400,displayWidth/2+600);
    
      
      obstaclesGroup.add(obstacles);
    }
    
  }
  