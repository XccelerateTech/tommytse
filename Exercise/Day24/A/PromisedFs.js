const fs=require('fs');
module.exports.stat=path=>{
    return new Promise((resolve,reject)=>{
        fs.stat(path,(err,stats)=>{
            if(err) {
                reject(err);
            } else {
                resolve(stats);
            }
        })
    })
}

module.exports.readdir=path=>{
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,files)=>{
            if(err){
                reject(err);
            }else{
                resolve(files);
            }
        })
    })
}
