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
  response: {
    type: Sequelize.STRING
  },
  voterMacAddr: {
    type: Sequelize.STRING,
    field: 'voter_mac_addr'
  }
});

Question.hasMany(Response);
Response.belongsTo(Question);