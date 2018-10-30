var EventEmitter = require('events');
class Timer extends EventEmitter {
    constructor () {
        super();
    }

    countDown(s) {
        var that = this;
        var Interval = setInterval(trigger,1000);
        function trigger() {
            if(s>=0){
            that.emit('tick', s);
            s--;
            }else {
                clearInterval(Interval);
            }
        }
    }

}

module.exports = Timer;