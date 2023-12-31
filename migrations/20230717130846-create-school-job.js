'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('SchoolJobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING,
        allowNull:false
      },
      link: {
        type: DataTypes.STRING,
        allowNull:false
      },
      type: {
        type: DataTypes.ENUM("Full Time","Part Time"),
        allowNull:false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      image: {
        type: DataTypes.STRING,
        allowNull:false
      },
      schoolId: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('SchoolJobs');
  }
};