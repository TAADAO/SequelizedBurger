// var orm = require('../config/orm');

// var burger = {
//     selectAll: function (cb) {
//         orm.selectAll("burgers", cb);
//     },
//     insertOne: function (newDataObject, cb) {
//         orm.insertOne("burgers", newDataObject, cb);
//     },
//     updateOne: function (updatedDataObject, id, cb) {
//         orm.updateOne("burgers", updatedDataObject, id, cb);
//     }
// };

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN

    });
    return Burger;
};