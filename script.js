function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    
    return {
      'total': t,
      
      'seconds': seconds
    };
  }
  
  /* timer */
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

/*game*/
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;


const keys = []


const player = {
    x: 50,
    y: canvas.height - 96,
    width: 96,
    height: 96,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
// left_turtle0 = document.getElementById('left_turtle');
playerSprite.src = "./images/spritesheet_turtle.png";

const background = new Image();
background.src = "./images/background.png";

// const playerSprite = new Image();
// playerSprite.src = "unknown.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


setInterval(function(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    handlePlayerFrame();
}, 50);

// function animate(){
//     ctx.clearRect(0,0,canvas.width, canvas.height);
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     // ctx.drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0);
//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
//     movePlayer();
//     handlePlayerFrame();
//     requestAnimationFrame(animate);
// }

// animate();

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer(){
    if(keys[37] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1
        player.moving = true;
    }
    if(keys[39] && player.x < canvas.width - player.width){
        player.x += player.speed;
        player.frameY = 0
        player.moving = true;
    }
}

function handlePlayerFrame(){
    if(player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
}



// load recycleble objects' images
// let arRecycle = image("./images/waterbottle"+'.png'); // to differentiate different waterbottles


/*
function recycleFall(){
    // for (let z = 0; z<2; z++){
    // lower by 100 px the recycleble object if it's above the canvas height
    if(arRecycleY > canvas.height){
        arRecycleY = -100;
        arRecycleX = random(30, canvas.width-30);
        arRecycleDy = random(1,3);
    } else { // or else just move down the object by the Dy
        arRecycleY += arRecycleDy;
    }
    var x = document.getElementById("water_bottle");
    ctx.drawImage(x, arRecycleX, arRecycleY);
    console.log(arRecycleY);
    
}
*/

let arRecycleX = 0, arRecycleY = 0, arRecycleDy = 5; // Dy is change in y
setInterval(function(){
    // initialze (x, y) and falling speed for two Recyclebles
    // the recyclebles

    if(arRecycleY > canvas.height){
        arRecycleY = -100;
        arRecycleX = Math.random() * canvas.width-30;
        arRecycleDy = 2 + Math.random() * 5;
    } else { // or else just move down the object by the Dy
        arRecycleY += arRecycleDy;
    }
    var x = document.getElementById("water_bottle");
    ctx.drawImage(x, arRecycleX, arRecycleY);
    console.log(arRecycleX);
    console.log(arRecycleDy);
    
}, 50);