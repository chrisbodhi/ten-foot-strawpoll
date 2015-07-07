var sequelize = require('sequelize');

var Question = sequelize.define('question', {
  question: {
    type: Sequelize.STRING
  },
  submitterMacAddr: {
    type: Sequelize.STRING,
    field: 'submitter_mac_addr'
  }
});

var Response = sequelize.define('response', {
  count: {
    type: Sequelize.INTEGER
  },
  response: {
    type: Sequelize.STRING
  }
});

Question.hasMany(Response);
Response.belongsTo(Question);