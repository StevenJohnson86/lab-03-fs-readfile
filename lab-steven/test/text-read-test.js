'use strict';

// (5468697320697320/4c6574732063616c/46696e616c6c792c)

const expect = require('chai').expect;
const fs = require('fs');
const textRead = require('../lib/text-read.js');



describe('text-read.js', function(){
  describe('#textReader', function(){
    it('processes the files in order', function(done){
      expect(textRead.fileReadDone[0]).to.equal('5468697320697320');
      expect(textRead.fileReadDone[1]).to.equal('4c6574732063616c');
      expect(textRead.fileReadDone[2]).to.equal('46696e616c6c792c');
      done();
    });
    // it('logs the files in order, with a delay on the second file', function(done){
    //
    //
    //   done();
    // });

  });
});



textRead.textReader('textData01', 'textData02', 'textData03', textRead.testConsole);
