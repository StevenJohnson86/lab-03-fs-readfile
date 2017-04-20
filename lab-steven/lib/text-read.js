'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.textReader = function(filename) {
  fs.readFile(`${__dirname}/../data/${filename}.txt`, function(err, data){
    if(err) throw err;
    console.log(data.toString('hex', 0, 8));
  });
};
