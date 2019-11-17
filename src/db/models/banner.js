'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    source: DataTypes.STRING,
    description: DataTypes.STRING,
    topicId:{
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      reference: {
        model:"Topics",
        key:"id",
        as:"topicId",
      }
    }
  }, {});
  Banner.associate = function(models) {
    Banner.belongsTo(models.Topic, {
      foreignKey: "topicId",
      onDelete:"Cascade",
    });
  };
  return Banner;
};