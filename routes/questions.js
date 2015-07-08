var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.Question.create({
    question: req.param('question')
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:question_id/destroy', function(req, res) {
  models.Question.find({
    where: {id: req.param('question_id')},
    include: [models.Response]
  }).then(function(question) {
    models.Response.destroy(
      {where: {QuestionId: question.id}}
    ).then(function(affectedRows) {
      question.destroy().then(function() {
        res.redirect('/');
      });
    });
  });
});

router.post('/:question_id/responses/create', function (req, res) {
  models.Question.find({
    where: { id: req.param('question_id') }
  }).then(function(question) {
    models.Response.create({
      answer: req.param('answer')
    }).then(function(answer) {
      answer.setQuestion(question).then(function() {
        res.redirect('/');
      });
    });
  });
});

router.get('/:question_id/responses/:task_id/destroy', function (req, res) {
  models.Question.find({
    where: { id: req.param('question_id') }
  }).then(function(question) {
    models.Response.find({
      where: { id: req.param('task_id') }
    }).then(function(task) {
      task.setQuestion(null).then(function() {
        task.destroy().then(function() {
          res.redirect('/');
        });
      });
    });
  });
});


module.exports = router;
