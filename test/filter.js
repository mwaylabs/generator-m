'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var config = require(path.join(__dirname, '../utils/config.js'));

describe('generators/filter', function () {
  describe('some', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/filter'))
        .withArguments('some')
        .on('end', done);
    });

    it('file, content', function () {
      var filePath = 'app/' + config.DEFAULT_MODULE + '/filters/some-fil.js';
      assert.fileContent([
        [filePath, 'angular.module(\'' + config.DEFAULT_MODULE + '\')'],
        [filePath, 'filter(\'some\','],
        [filePath, 'some filter: ']
      ]);
    });

    it('spec file, describe signature, critical content', function () {
      var specPath = 'test/karma/' + config.DEFAULT_MODULE + '/some-fil.spec.js';
      assert.fileContent([
        [specPath, 'module: main, filter: some'],
        [specPath, '"some filter:"'],
        [specPath, 'toBe(\'some filter:']
      ]);
    });
  });

  describe('someThing myModule', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/filter'))
        .withArguments('someThing myModule')
        .on('end', done);
    });

    it('file, content', function () {
      var filePath = 'app/my-module/filters/some-thing-fil.js';
      assert.fileContent([
        [filePath, 'angular.module(\'myModule\')'],
        [filePath, 'filter(\'someThing\','],
        [filePath, 'someThing filter: ']
      ]);
    });

    it('spec file, describe signature, critical content', function () {
      var specPath = 'test/karma/my-module/some-thing-fil.spec.js';
      assert.fileContent([
        [specPath, 'module: myModule, filter: someThing'],
        [specPath, '"someThing filter:"'],
        [specPath, 'toBe(\'someThing filter:']
      ]);
    });
  });
});
