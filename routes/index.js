var models  = require('../models'),
    express = require('express'),
    router  = express.Router();

router.get('/', function(req, res) {
  models.Question.findAll({
    include: [ models.Response ]
  }).then(function(questions) {
    res.render('index', {
      title: 'Ten Foot Strawpoll',
      questions: questions
    });
  });
});

module.exports = router;
