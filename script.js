function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    
    return {
      'total': t,
      
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= -1) {
        clearInterval(timeinterval);
        alert('counter ended!');
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) +  10 * 1000);

  initializeClock('clockdiv', deadline);
// var block = document.getElementById("block");
// var hole = document.getElementById("hole");
// var character = document.getElementById("character");
// var jumping = 0;
// var counter = 0;

// hole.addEventListener('animationiteration', () => {
//     var random = -((Math.random()*300)+150);
//     hole.style.top = random + "px";
//     counter++;
// });
// setInterval(function(){
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     if(jumping==0){
//         character.style.top = (characterTop+3)+"px";
//     }
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//     var cTop = -(500-characterTop);
//     if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
//         alert("Game over. Score: "+(counter-1));
//         character.style.top = 100 + "px";
//         counter=0;
//     }
// },10);

// function jump(){
//     jumping = 1;
//     let jumpCount = 0;
//     var jumpInterval = setInterval(function(){
//         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if((characterTop>6)&&(jumpCount<15)){
//             character.style.top = (characterTop-5)+"px";
//         }
//         if(jumpCount>20){
//             clearInterval(jumpInterval);
//             jumping=0;
//             jumpCount=0;
//         }
//         jumpCount++;
//     },10);
// }

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width = 800;
canvas.height = 500;
const keys = []

const player = {
    x: 0,
    y: 0,
    width: 448,
    height: 450,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const background = new Image();
playerSprite.src = "green.png"

const playerSprite = new Image();
playerSprite.src = "unknown.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


function animate(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0, player.width, player.height);
    requestAnimationFrame(animate);

}
animate();

