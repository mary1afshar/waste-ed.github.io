

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
