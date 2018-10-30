//the timer itself- settings and listeners to events
var EventEmitter = require('events');
class Timer extends EventEmitter {
    constructor () {
        super();
        this.seconds = 0;
        this.counter = 0;
        const that = this;
        let interval;

        this.on('start', function(seconds) { //listen to start event and seconds-para: timer.emit('start',seconds);
            if(seconds != 'undefined') {
                this.seconds = seconds;
            }
            interval = setInterval(emitInterval, 1000);
            const that = this;
            function emitInterval() {
                var remaining = that.seconds - that.counter;
                if(remaining==0) {
                    clearInterval(interval);
                }
                that.emit('tick', remaining);
                that.counter++;
            }
        })

        this.on('stop', function() {//listen to stop event only
            clearInterval(interval);
            this.seconds = 0;
            this.counter = 0;
        })
        
        this.on('pause', function() {//listen to pause event only
            clearInterval(interval);
        })
    }

}

module.exports = Timer;