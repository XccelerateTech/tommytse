var Timer = require('./timer');
var timer = new Timer;
timer.on('tick',function(s) {
    if(s>0){
    console.log(`time remaining: ${s}`);
    } else {
        console.log('kaboom');
    }
})

timer.countDown(5);