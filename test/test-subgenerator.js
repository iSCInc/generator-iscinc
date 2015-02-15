'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var fs = require('fs');
var os = require('os');

describe('generator:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../subgenerator'))
      .withArguments(['iscinc', '--force'])
      .on('ready', function () {
        fs.writeFileSync('package.json', '{"name": "generator-iscinc", "files":[]}');
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'iscinc/index.php',
      'iscinc/templates/index.js'
    ]);
  });

  it('update package.json file array', function () {
    var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    assert.equal(pkg.files[0], 'iscinc');
  });
});
