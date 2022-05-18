var prefondo
var buton
var postfondo
var retrybuton
var fondo
var shooter
var gun 
var enemy
var barrera
var shot
var gameState=0
var shutsound

var score=0
var vidas=5
function preload(){
  shooterimg=loadImage("nave_preview_rev_1.png")

  fondoimg=loadImage("67664951-ilustración-de-vector-de-fondo-espacio-y-estrella.webp")
 // shot=loadSound("sound.mp3")
//sound=loadSound("intro1.mp3")
kill=loadSound("muerte.mp3")
shot=loadSound("Record (online-voice-recorder.com) (1).mp3")
butonimg=loadImage("estilo-de-dibujos-animados-vectoriales-botones-habilitados-y-desactivados-con-texto-para-el-diseno-de-juegos-sobre-fondo-de-textura-de-nave-espacial-boton-de-interfaz-de-juego-en-la-nave-espacial-interi-.png")
gunimg=loadImage("bala_preview_rev_1.png")
shotenimg=loadImage("4e3d4629-dba0-4bd1-b19c-0c21164765a0_preview_rev_1.png")
retryimg=loadImage("png-transparent-computer-icons-reboot-symbol-restart-miscellaneous-purple-violet-thumbnail_preview_rev_3.png")
scoreimg=loadImage("8fac47a68aee5e789404ca0a4566bd3e.png")
vidasimg=loadImage("9b57879e6562e815c184fcf87963342f.png")
gameover=loadImage("juego-sobre-pantalla-digital-glitch-vector-fondo-de-error-ordenador-derrota-internet-ciberataque-amenaza-mensaje-o-juegos-azar-214592981_preview_rev_1.png")
playimg=loadImage("86b0e3f6001380ee6ef7f30845723884.png")
prefondoimg=loadImage("db1ae342-b568-46c5-9803-088f982e1538.jpg")
loseSound=loadSound("loseRecord (online-voice-recorder.com) (4).mp3")
}
function setup(){
  createCanvas(600,600)
  
  fondo=createSprite(300,200,600,800)
  fondo.addImage(fondoimg)
  fondo.scale=3
  shooter=createSprite(300,500,30,30)
  shooter.addImage(shooterimg)
  shooter.scale=.2
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  gun.scale=.11
  

enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),40,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),40,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),40,50,50)
enemy6.shapeColor="green"
enemy6.visible=false
prefondo=createSprite(300,300,600,600)

//imagen fondo
prefondo.addImage(prefondoimg)
prefondo.scale=2.3

buton=createSprite(300,500,40,20)
buton.shapeColor="red"
buton.addImage(butonimg)
postfondo=createSprite(310,250,600,600)
postfondo.addImage(gameover)
postfondo.scale=1.7
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.scale=0.6
retrybuton.visible=false
//sound.play();
scoreAn=createSprite(60,40)
  scoreAn.addImage(scoreimg)
  scoreAn.scale=.6
  vidasAn=createSprite(450,40)
  vidasAn.scale=.6
  vidasAn.addImage(vidasimg)
  play=createSprite(300,250)
  play.addImage(playimg)


}

function draw(){
  background("black")

if(gameState===0){


if(mousePressedOver(buton)){
  gameState+=+1
}


}


 
  
 
             if(gameState===1){
              play.visible=false

               buton.visible=false
               enemyShot();
           

               prefondo.visible=false
               move();
               shoot();
               fondo.velocityY=2
if(fondo.y>=500){

  fondo.y=200
}
               console.log(fondo.y)
  if(gunGroup.isTouching(enemy1)){
    enemy1.destroy();
    gun.destroy();
    score+=+1
    kill.play();

  }
  if(gunGroup.isTouching(enemy2)){
    enemy2.destroy();
    gun.destroy();
    score+=+1
    kill.play();


  }
  if(gunGroup.isTouching(enemy3)){
    enemy3.destroy();
    gun.destroy();
    score+=+1
    kill.play();

  }

 
  spawnenemy();

 if(shoten.isTouching(shooter)){
   shoten.destroy();
   vidas+=-1
   loseSound.play();

  }
 if(shoten2.isTouching(shooter)){
  shoten2.destroy();
  vidas+=-1

  loseSound.play();

}
if(shoten3.isTouching(shooter)){
  shoten3.destroy();
  vidas+=-1
  loseSound.play();

}

if(vidas===0){
  shooter.destroy
  if(vidas===0||vidas<0){
    gameState=5
  }
}
 
  
  if(score===20||score>20){

gameState+=+1
vidas=5


  }
  fill("red")
   textSize(25)
   text("   "+score,200,200)
}
              if(gameState===2){
                enemyshot2();
                move();
  enemy4.visible=true
  shoot();
  spawn2();
 
  if(gunGroup.isTouching(enemy1)){
    enemy1.destroy();
    gun.destroy();
    score+=+1
    kill.play();


  }
  if(gunGroup.isTouching(enemy2)){
    enemy2.destroy();
    gun.destroy();
    score+=+1
    kill.play();


  }
  if(gunGroup.isTouching(enemy3)){
    enemy3.destroy();
    gun.destroy();
    score+=+1
  }
  if(gunGroup.isTouching(enemy4)){
    enemy4.destroy();
    gun.destroy();
    score+=+1
  }

  if(shoten.isTouching(shooter)){
    shoten.destroy();
    vidas+=-1
    loseSound.play();

   }
  if(shoten2.isTouching(shooter)){
   shoten2.destroy();
   vidas+=-1
   loseSound.play();

 
 }
 if(shoten3.isTouching(shooter)){
   shoten3.destroy();
   vidas+=-1
   loseSound.play();


 }
 if(shoten4.isTouching(shooter)){
  shoten4.destroy();
  vidas+=-1
  loseSound.play();

}
 
 if(vidas===0){
   shooter.destroy
 }
 if(score===45||score>45){
  gameState+=+1
  enemyshot3();
  vidas=5

  
 
}
if(vidas===0||vidas<0){
  gameState=5
}
  fill("black")
  textSize(0)
  text("SCORE: "+score,200,200)
  }

  if(score===45||score>45){
    enemyshot3();
    
  
  }

        if(gameState===3){
          move();
          enemyshot3();
          enemy5.visible=true
          shoot();
spawn3();
if(gunGroup.isTouching(enemy1)){
  enemy1.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy2)){
  enemy2.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy3)){
  enemy3.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy4)){
  enemy4.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy5)){
  enemy5.destroy();
  gun.destroy();
  score+=+1
}

if(shoten5.isTouching(shooter)){
  shoten5.destroy();
  vidas+=-1
  loseSound.play();

}
if(shoten6.isTouching(shooter)){
  shoten6.destroy();
  vidas+=-1
  loseSound.play();

} if(shoten7.isTouching(shooter)){
  shoten7.destroy();
  vidas+=-1

} if(shoten8.isTouching(shooter)){
  shoten8.destroy();
  vidas+=-1
  loseSound.play();

}
if(shoten9.isTouching(shooter)){
  shoten9.destroy();
  vidas+=-1
  loseSound.play();

}
if(score===60||score>60){
  gameState+=+1
  vidas=5
  
  
}
if(vidas===0||vidas<0){
  gameState=5
}

fill("black")
   textSize(0)
   text("SCORE: "+score,200,200)
 }
 if(score===60||score>60){
enemyshot4();

 }
      if(gameState===4){
        enemyshot4();
        move();
        enemy6.visible=true
shoot();
spawn4();
if(gunGroup.isTouching(enemy1)){
  enemy1.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy2)){
  enemy2.destroy();
  gun.destroy();
  score+=+1

}
if(gunGroup.isTouching(enemy3)){
  enemy3.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy4)){
  enemy4.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy5)){
  enemy5.destroy();
  gun.destroy();
  score+=+1
}
if(gunGroup.isTouching(enemy6)){
  enemy6.destroy();
  gun.destroy();
  score+=+1
}
if(shoten5.isTouching(shooter)){
  shoten5.destroy();
  vidas+=-1
      loseSound.play();


}
if(shoten6.isTouching(shooter)){
  shoten6.destroy();
  vidas+=-1
  loseSound.play();

} if(shoten7.isTouching(shooter)){
  shoten7.destroy();
  vidas+=-1
  loseSound.play();

} if(shoten8.isTouching(shooter)){
  shoten8.destroy();
  vidas+=-1
  loseSound.play();

}
if(shoten9.isTouching(shooter)){
  shoten9.destroy();
  vidas+=-1
  loseSound.play();

}
if(shoten10.isTouching(shooter)){
  shoten10.destroy();
  vidas+=-1
  loseSound.play();

}

if(vidas===0||vidas<0){
  gameState=5
  loseSound.play();

}



      }
      if(vidas===0||vidas<0){
        gameState=5

      }

   
          if(gameState===5){

            shooter.destroy();
            gun.destroy();
            enemy1.destroy();
            enemy2.destroy();
            enemy3.destroy();
            enemy4.destroy();
            enemy5.destroy();
            enemy6.destroy();
            shoten.destroy();
            shoten2.destroy();
            shoten3.destroy();
            shoten4.destroy();
            shoten5.destroy();
            shoten6.destroy();
            shoten7.destroy();
            shoten8.destroy();
            shoten9.destroy();
            shoten10.destroy();


postfondo.visible=true
retrybuton.visible=true
if(mousePressedOver(retrybuton)){
score=0
vidas=5
create();
gameState=0
shooter.x=300

//sound.play();


}



          }

  drawSprites();
  
  fill("red")
  textSize(35)
  text("  "+score,115,50)
  text("  "+vidas,500,50)
  console.log(enemy5.y)

}
 

 






function shoot(){
if(keyWentUp("space")){
gun=createSprite(shooter.x,shooter.y)
gun.addImage(gunimg)
gun.scale=.05

gun.velocityY=-40
shot.play();



}
gunGroup.add(gun)
gunGroup.lifetime=10




}

function spawnenemy(){
/*if(frameCount%20===0){
enemy=createSprite(random(50,400),0,50,50)
enemy.shapeColor="green"
enemy.velocityY=3


}
enemyGroup.add(enemy)*/
if(frameCount%200===0){
enemy1=createSprite(random(50,400),-50,50,50)
enemy1.addImage(shotenimg)
enemy1.velocityY=5
enemy1.scale=.3

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.3

enemy2.velocityY=5

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.3

enemy3.velocityY=5


}
}
function spawn2(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.scale=.27

enemy1.velocityY=5.7

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.27

enemy2.velocityY=5.7

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.27
enemy3.velocityY=5.7
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.scale=.27


enemy4.velocityY=5.7
enemy4.visible=true

}
}

function spawn3(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.scale=.25

enemy1.velocityY=6.5

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.velocityY=6.5
enemy2.scale=.25


enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.velocityY=6.5
enemy3.scale=.25

enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.scale=.25

enemy4.velocityY=6.5
enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.addImage(shotenimg)
enemy5.scale=.25

enemy5.velocityY=6.5
enemy5.visible=true
}



}
function spawn4(){
  if(frameCount%200===0){
    
    enemy1=createSprite(random(50,400),-50,50,50)
    enemy1.addImage(shotenimg)
    enemy1.velocityY=7.24
    enemy1.scale=.22

enemy2=createSprite(random(50,400),-50,50,50)
enemy2.addImage(shotenimg)
enemy2.scale=.22


enemy2.velocity=7.2346886465429

enemy3=createSprite(random(50,400),-50,50,50)
enemy3.addImage(shotenimg)
enemy3.scale=.22

enemy3.velocityY=4.4
enemy4=createSprite(random(50,400),-50,50,50)
enemy4.addImage(shotenimg)
enemy4.velocityY=7.335262745484
enemy4.scale=.22

enemy4.visible=true
enemy5=createSprite(random(50,400),-50,50,50)
enemy5.addImage(shotenimg)
enemy5.scale=.22

enemy5.velocityY=7.324374876544323
enemy5.visible=true

enemy6=createSprite(random(50,400),-50,50,50)
enemy6.addImage(shotenimg)
enemy6.velocityY=7.34556453
enemy6.visible=true
enemy6.scale=.22
}
}

function move(){
  if(keyCode===LEFT_ARROW){
    shooter.x+=-9
  }
  if(keyCode===RIGHT_ARROW){
    shooter.x+=+9
  }
}

function create(){

//nuevo
fondo=createSprite(300,200,600,800)
  fondo.addImage(fondoimg)
  fondo.scale=3
  shooter=createSprite(300,500,30,30)
  shooter.addImage(shooterimg)
  shooter.x=300

  shooter.scale=.2
  gunGroup= new Group();
  gun=createSprite(700,shooter.y,20,20)
  gun.scale=.11
  

enemy1=createSprite(1000,-500,50,50)
enemy1.shapeColor="pruple"

enemy2=createSprite(1000,-500,50,50)
enemy2.shapeColor="purple"
shoten=createSprite(1000,-500,30,30)
shoten2=createSprite(1000,-500,30,30)
shoten3=createSprite(1000,-500,30,30)
shoten4=createSprite(100,-500,30,30)
shoten5=createSprite(1000,-500,30,30)
shoten6=createSprite(1000,-500,30,30)
shoten7=createSprite(1000,-500,30,30)
shoten8=createSprite(1000,-500,30,30)
shoten9=createSprite(1000,-500,30,30)
shoten10=createSprite(100,-500,30,30)
enemy3=createSprite(1000,-500,50,50)
enemy3.shapeColor="purple"
enemy4=createSprite(random(50,400),40,50,50)
enemy4.shapeColor="green"
enemy4.visible=false
enemy5=createSprite(random(50,400),40,50,50)
enemy5.shapeColor="green"
enemy5.visible=false
enemy6=createSprite(random(50,400),40,50,50)
enemy6.shapeColor="green"
enemy6.visible=false
prefondo=createSprite(300,300,600,600)

//imagen fondo
prefondo.addImage(prefondoimg)
prefondo.scale=2.3

buton=createSprite(300,500,40,20)
buton.shapeColor="red"
buton.addImage(butonimg)
postfondo=createSprite(310,250,600,600)
postfondo.addImage(gameover)
postfondo.scale=1.7
postfondo.visible=false
retrybuton=createSprite(300,500,100,30)
retrybuton.addImage(retryimg)
retrybuton.scale=0.6
retrybuton.visible=false
//sound.play();
scoreAn=createSprite(60,40)
  scoreAn.addImage(scoreimg)
  scoreAn.scale=.6
  vidasAn=createSprite(450,40)
  vidasAn.scale=.6
  vidasAn.addImage(vidasimg)
  play=createSprite(300,250)
  play.addImage(playimg)
 


}
function enemyShot(){
  if(enemy1.y<170){
  if(frameCount%80===0){

shoten=createSprite(enemy1.x,enemy1.y,5,10)
shoten.velocityY=20
shoten.shapeColor="red"

  }
  if(frameCount%80===0){

    shoten2=createSprite(enemy2.x,enemy2.y,5,10)
    shoten2.velocityY=20
    shoten2.shapeColor="red"

    
      }
}
if(frameCount%80===0){

  shoten3=createSprite(enemy3.x,enemy3.y,5,10)
  shoten3.velocityY=20
  shoten3.shapeColor="red"

}
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();
  shoten4.destroy();

}
    }
    function enemyshot2(){

      if(enemy1.y<100){
        if(frameCount%40===0){
      
      shoten=createSprite(enemy1.x,enemy1.y,5,10)
      shoten.velocityY=25
      shoten.shapeColor="red"
      
        }
        if(frameCount%40===0){
      
          shoten2=createSprite(enemy2.x,enemy2.y,5,10)
          shoten2.velocityY=25
          shoten2.shapeColor="red"
          
            }
      }
      if(frameCount%40===0){
      
        shoten3=createSprite(enemy3.x,enemy3.y,5,10)
        shoten3.velocityY=25
        shoten3.shapeColor="red"


      }
      if(frameCount%40===0){
      
        shoten4=createSprite(enemy4.x,enemy4.y,5,10)
        shoten4.velocityY=25
        shoten4.shapeColor="red"
      }
if(shoten.y>600){
  shoten.destroy();
  shoten2.destroy();
  shoten3.destroy();
  shoten4.destroy();

}

    }


    function enemyshot3(){

      if(enemy5.y<200){
        if(frameCount%80===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=30
      shoten5.shapeColor="red"
      
        }
        if(frameCount%80===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=30
          shoten6.shapeColor="red"
          
            }
      }
      if(frameCount%80===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=30
        shoten7.shapeColor="red"


      }
      if(frameCount%80===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=30
        shoten8.shapeColor="red"
      }
      if(frameCount%80===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=30
        shoten9.shapeColor="red"
      }
if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();

}

    }

    function enemyshot4(){
      if(enemy5.y<200){
        if(frameCount%80===0){
      
      shoten5=createSprite(enemy1.x,enemy1.y,5,10)
      shoten5.velocityY=20
      shoten5.shapeColor="red"
      
        }
        if(frameCount%80===0){
      
          shoten6=createSprite(enemy2.x,enemy2.y,5,10)
          shoten6.velocityY=38
          shoten6.shapeColor="red"
          
            }
      }
      if(frameCount%80===0){
      
        shoten7=createSprite(enemy3.x,enemy3.y,5,10)
        shoten7.velocityY=38
        shoten7.shapeColor="red"


      }
      if(frameCount%80===0){
      
        shoten8=createSprite(enemy4.x,enemy4.y,5,10)
        shoten8.velocityY=38
        shoten8.shapeColor="red"
      }
      if(frameCount%80===0){
      
        shoten9=createSprite(enemy5.x,enemy5.y,5,10)
        shoten9.velocityY=38
        shoten9.shapeColor="red"
      }
      if(frameCount%80===0){

        shoten10=createSprite(enemy6.x,enemy6.y,5,10)
        shoten10.velocityY=38
        shoten10.shapeColor="red"
      }


if(shoten5.y>600){
  shoten5.destroy();
  shoten6.destroy();
  shoten7.destroy();
  shoten8.destroy();
  shoten9.destroy();
  shoten10.destroy()

}



    }