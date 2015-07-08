var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Question.findAll({
    include: [ models.Response ]
  }).then(function(questions) {
    res.render('index', {
      title: 'Express',
      questions: questions
    });
  });
});

module.exports = router;
