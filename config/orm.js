// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
	selectAll: function (cb) {
		console.log("orm select***");
		// var allQuery = "SELECT * FROM " + tableInput + ";";
		var allQuery = "SELECT * FROM burgers;";
		connection.query(allQuery, function (err, result) {
			if (err) { throw err; }

			cb(result);
		});
	},
	insertOne: function (burger_name, cb) {

		console.log("orm insert***");
		var insertQuery = "INSERT INTO burgers (burger_name, devoured) VALUES (?,0);";

		connection.query(insertQuery, [burger_name], function (err, result) {
			if (err) { throw err; }

			cb(result);
		});

	},

	updateOne: function (tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function (err, res) {

			if (err) { throw err; }

			cb(res);
		});
	}
};

module.exports = orm;
