'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        require: true,
        field: 'first_name'
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