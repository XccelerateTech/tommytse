var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

function copy(path) {
    var writeable = fs.createWriteStream(__dirname + `${path}/textcopy.txt`);
    readable.pipe(writeable);
}

copy('');



