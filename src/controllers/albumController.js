const Album = require("../models/albumModel");

const getAllAlbums = (req, res) => {
    Album.getAll()
    .then(([results]) => res.status(200).send(results))
    .catch((error) => {
    console.error(error);
    res.status(500).send("Error retrieving all albums");    
    });
};

module.exports = {
    getAllAlbums
}