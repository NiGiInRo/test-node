'use strict';
const uuid = require('uuid')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
        require: true,
        field: 'name'
      },
      lastName: {
        type: DataTypes.STRING,
        require: true,
        field: 'last_name'
      },
      birthDate: {
        type: DataTypes.DATE,
        unique: true,
        require: true,
        field: 'birth_date'
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        require: true
      },
      password: {
        type: DataTypes.STRING,
        require: true
      },
      roleId: {
        type: DataTypes.INTEGER,
        require: true,
        field: 'role_id'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        require: true,
        field: 'is_active'
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
      tableName: 'users'
    }
  );
  return User;
};