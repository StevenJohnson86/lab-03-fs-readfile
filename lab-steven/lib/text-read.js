'use strict';

const fs = require('fs');

// module.exports = exports = {};



// exports.readDone = [];

module.exports.textReader = function(filename1, filename2, filename3, callback) {
  let fileReadDone = [];
  fs.readFile(`${__dirname}/../data/${filename1}.txt`, function(err, data){
    if(err) throw err;
    // console.log(data.toString('hex', 0, 8), filename);
    fileReadDone.push(data.toString('hex', 0, 8));
    // console.log(fileReadDone);

    fs.readFile(`${__dirname}/../data/${filename2}.txt`, function(err, data){
      if(err) throw err;
      // console.log(data.toString('hex', 0, 8), filename);
      fileReadDone.push(data.toString('hex', 0, 8));
      // console.log(fileReadDone);

      fs.readFile(`${__dirname}/../data/${filename3}.txt`, function(err, data){
        if(err) throw err;
        // console.log(data.toString('hex', 0, 8), filename);
        fileReadDone.push(data.toString('hex', 0, 8));
        // console.log(fileReadDone);
        // return callback(fileReadDone);
        exports.readDone.push(file)
      });
    });
  });
};

// exports.textReader('textData01', 'textData02', 'textData03', exports.testConsole);
