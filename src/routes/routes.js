const express = require('express');

const router = express.Router();

const albumController = require("../controllers/albumController");

//- as a user, I want to be able to see a all albums.
router.get("/albums", albumController.getAllAlbums);




module.exports = router;