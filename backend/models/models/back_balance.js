const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_balance', {
    balance_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    balance_content: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    balance_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    balance_like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    balance_type: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'back_balance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "balance_id" },
        ]
      },
    ]
  });
};