'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Memberships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Memberships : MembershipUsers (1:N)
      this.hasMany(models.MembershipUsers, {
        sourceKey: 'membershipId',
        foreignKey: 'membershipId',
      });
      // // board : Comment (1:N)
      // this.hasOne(models.board, {
      //   sourceKey: 'listId',
      //   foreignKey: 'ListId',
      // });
    }
  }
  Memberships.init(
    {
      membershipId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      // BoardId: {
      //   type: DataTypes.INTEGER,
      // },
      ownerId: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Memberships',
    },
  );
  return Memberships;
};
