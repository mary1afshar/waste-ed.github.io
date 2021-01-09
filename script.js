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


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
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
background.src = "green.png";

// const playerSprite = new Image();
// playerSprite.src = "unknown.png";

left_turtle0 = document.getElementById('left_turtle');

function drawSprite(img, sX, sY, sW, sH, dX, dY){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY);
}


function animate(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.drawSprite(playerSprite, 0, 0, player.width, player.height, 0, 0);
    ctx.drawImage(left_turtle0, 50, 50);
    requestAnimationFrame(animate);

}
animate();

