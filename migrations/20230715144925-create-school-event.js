'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('SchoolEvents', {
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
    await queryInterface.dropTable('SchoolEvents');
  }
};