"use strict";

module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Response", {
    answer: DataTypes.STRING,
    votes:  DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Response.belongsTo(models.Question);
      }
    }
  });

  return Response;
};
