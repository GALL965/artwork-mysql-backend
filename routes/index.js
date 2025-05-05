const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/artworks', controller.getArtworks);
router.post('/artworks', controller.createArtwork);
router.put('/artworks/:id', controller.updateArtwork);
router.delete('/artworks/:id', controller.deleteArtwork);

module.exports = router;
