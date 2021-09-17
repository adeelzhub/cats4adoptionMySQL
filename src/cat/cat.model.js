const {sequelize } = require("../db/connection");
const { DataTypes} = require("sequelize");

const Cat = sequelize.define("Cat", {
    breed : {
        type: DataTypes.STRING,
        allowNull: false
    },
    adoptionCost:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    numbers: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Cat;