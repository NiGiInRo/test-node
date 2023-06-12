'use strict';
const uuid = require('uuid');
const db = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        require: true
      },
      description: {
        type: DataTypes.STRING,
        require: true
      },
      price: {
        type: DataTypes.INTEGER,
        unique: true,
        require: true
      },
      brand: {
        type: DataTypes.STRING,
        unique: true,
        require: true
      },
      creatorId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        require: true,
        field: 'creator_id',
        references: {
          model: db.User,
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        require: true,
        field: 'category_id',
      },
      createdAt: {
        type: DataTypes.DATE,
        require: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        require: false,
        field: 'updated_at'
      }
    },
    {
      timestamps: true,
      tableName: 'products'
    }
  );
  Product.associate = models => [
    Product.belongsTo(models.User, { as: 'user' })
  ];
  return Product;
};