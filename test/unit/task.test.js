'use strict';

var expect = require('expect.js');

describe('models/response', function () {
  beforeEach(function () {
    this.Response = require('../../models').Response;
  });

  describe('create', function () {
    it('creates a response', function () {
      return this.Response.create({ answer: 'an answer' }).then(function (response) {
        expect(response.answer).to.equal('an answer');
      });
    });
  });
});
