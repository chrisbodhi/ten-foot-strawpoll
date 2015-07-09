'use strict';

var app      = require('../../app'),
    Bluebird = require('bluebird'),
    expect   = require('expect.js'),
    request  = require('supertest');

describe('question creation page', function () {
  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.Response.destroy({ truncate: true }),
      this.models.Question.destroy({ truncate: true })
    ]);
  });

  it('loads correctly', function (done) {
    request(app).get('/').expect(200, done);
  });

  it('lists a question if there is one', function (done) {
    this.models.Question.create({ question: 'who' }).then(function () {
      request(app).get('/').expect(/who/, done);
    })
  });

  it('lists the responses for the question', function (done) {
    this.models.Question.create({ question: 'who' }).bind(this).then(function (question) {
      return this.models.Response.create(
        { answer: 'response 1', QuestionId: question.id },
        { answer: 'response 2', QuestionId: question.id } );
    }).then(function () {
      request(app).get('/').expect(/response 2/, done);
    });
  });
});
