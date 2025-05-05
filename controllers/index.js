const { Artwork } = require('../database/models');

// Obtener todas las obras
const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.findAll();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear nueva obra
const createArtwork = async (req, res) => {
  try {
    const { title, author, year, description, imageUrl } = req.body;

    if (!title || !author || !year || !description) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios (excepto la imagen).' });
    }

    const artwork = await Artwork.create({ title, author, year, description, imageUrl });
    res.status(201).json(artwork);
  } catch (err) {
    console.error('❌ Error al crear la obra:', err);
    res.status(400).json({ error: err.message });
  }
};

// Eliminar una obra
const deleteArtwork = async (req, res) => {
  try {
    const id = req.params.id;
    await Artwork.destroy({ where: { id } });
    res.json({ message: 'Obra eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar obra
const updateArtwork = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, year, description, imageUrl } = req.body;

    if (!title || !author || !year || !description) {
      return res.status(400).json({ error: "Todos los campos son obligatorios (excepto la imagen)" });
    }

    const artwork = await Artwork.findByPk(id);
    if (!artwork) {
      return res.status(404).json({ error: "Obra no encontrada" });
    }

    await artwork.update({ title, author, year, description, imageUrl });
    res.json(artwork);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getArtworks,
  createArtwork,
  deleteArtwork,
  updateArtwork,
};
