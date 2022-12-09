const pokemonController = require('../controllers/pokemonController');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', pokemonController.viewAll);
router.get('/edit/:id', pokemonController.renderEditForm);
router.post('/edit/:id', pokemonController.updatePokemon);
router.get('/delete/:id', pokemonController.deletePokemon);
router.get('/add', pokemonController.renderAddForm);

module.exports = router;
