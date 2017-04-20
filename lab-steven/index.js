'use strict';

const textRead = require('./lib/text-read.js');


let testcall = function(fileArr){
  console.log(fileArr);
};
textRead.textReader('textData01', 'textData02', 'textData03', testcall);
