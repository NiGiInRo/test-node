const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../../config/config');

const basename = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(dbConfig.development);

/*
const models = {
  User: User(sequelize, Sequelize.DataTypes),
  // Otros modelos aquí
};
*/
fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.define(path.join(__dirname, file));
    db[model.name] = model;
    console.log('MODELO');
    console.log(model);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;