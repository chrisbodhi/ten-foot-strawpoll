var Sequelize = require('sequelize'),
    sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
      host: process.env.HOST,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });

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

sequelize.sync();