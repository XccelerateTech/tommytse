//showing the results
var Timer = require('./timer');
var start = require('./timer-utils').start;
var stop = require('./timer-utils').stop;
var pause = require('./timer-utils').pause;

var timer = new Timer;
timer.on('tick',function(remaining) {
    if(remaining == 0){
        return console.log('kaboom');
    }
    console.log('Time remaining: ' + remaining);
})

start(timer, 2);