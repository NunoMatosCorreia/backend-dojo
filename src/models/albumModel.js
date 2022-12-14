const connection = require("../../db");

//get all albums

const getAll = () => {
    return connection.query("SELECT * FROM album").then((results) => results);
};

module.exports = {
getAll,
};