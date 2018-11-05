//to trigger the functions
//timer.emit('',data)<->timer.on('',function(data)); this emit data will pass to on data
module.exports = {
    start: function(timer, seconds) {
        timer.emit('start', seconds);
    },

    stop: function(timer) {
        timer.emit('stop');
    },

    pause : function(timer) {
        timer.emit('pause');
    }
}
/*OR
modlule.exports.start(){...}
modlule.exports.stop(){...}
modlule.exports.pause(){...}
*/